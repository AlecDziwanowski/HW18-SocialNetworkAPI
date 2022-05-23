const { Thought } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .then(thoughts => res.json(thoughts))
            .catch(err => res.status(500).json(err.message));
    },
    // create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            // need to push this thought to user's thought array?
            .then(thought => res.json(thought))
            .catch(err => res.status(500).json(err.message));
    },
    // get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
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
            { runValidators: true, new: true },
        )
            .then(thought =>
                !thought
                    ? res.status(404).json({ message: 'No such thought exists.' })
                    : res.json(thought)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // delete a thought and remove their thoughts
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then(thought =>
                !thought
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
                    : res.json(thought)
            )
            .catch(err => res.status(500).json(err.message));
    },
};
