const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughts => res.json(thoughts))
            .catch(err => res.status(500).json(err.message));
    },
    // create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then(thought => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought } },
                    { new: true }
                );
            })
            .then(user =>
                !user
                    ? res.status(404).json({ message: 'Thought created, but no such user exists.' })
                    : res.json(user)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thought =>
                !thought
                    ? res.status(404).json({ message: 'No such thought exists.' })
                    : res.json(thought)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // Update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            // { $set: ({ thoughtText: req.body.thoughtText }) },
            { runValidators: true, new: true },
        )
            .populate({ path: 'reactions', select: '-__v' })
            .select('-___v')
            .then(updatedThought =>
                !updatedThought
                    ? res.status(404).json({ message: 'No such thought exists.' })
                    : res.json(updatedThought)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // delete a thought and remove their thoughts
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then(deletedThought =>
                !deletedThought
                    ? res.status(404).json({ message: 'No such thought exists.' })
                    : res.json({ message: 'Thought successfully deleted.' })
            )
            .catch(err => res.status(500).json(err.message));
    },

    // Add an reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true },
        )
            .then(thought =>
                !thought
                    ? res.status(404).json({ message: 'No such thought exists.' })
                    : res.json(thought)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // Remove reaction from a thought
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true },
        )
            .then(thought =>
                !thought
                    ? res.status(404).json({ message: 'No such thought exists.' })
                    : res.json({ message: 'Successfully deleted reaction.' })
            )
            .catch(err => res.status(500).json(err.message));
    },
};
