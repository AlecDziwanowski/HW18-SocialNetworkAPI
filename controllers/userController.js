const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err.message));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err.message));
    },
    // get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(user =>
                !user
                    ? res.status(404).json({ message: 'No such user exists.' })
                    : res.json(user)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true },
        )
            .then(user =>
                !user
                    ? res.status(404).json({ message: 'No such user exists.' })
                    : res.json(user)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // delete a user and remove their thoughts
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then(user =>
                !user
                    ? res.status(404).json({ message: 'No such user exists.' })
                    : Thought.findOneAndUpdate(
                        { users: req.params.userId },
                        { $pull: { users: req.params.userId } },
                        { new: true },
                    )
            )
            .then(thought =>
                !thought
                    ? res.status(404).json({ message: 'User deleted, but no associated thoughts exist.' })
                    : res.json({ message: 'User successfully deleted.' })
            )
            .catch(err => res.status(500).json(err.message));
    },

    // Add an friend to a user
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body._id } },
            { runValidators: true, new: true },
        )
            .then(user =>
                !user
                    ? res.status(404).json({ message: 'No such user exists.' })
                    : res.json(user)
            )
            .catch(err => res.status(500).json(err.message));
    },
    // Remove friend from a user
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true },
        )
            .then(user =>
                !user
                    ? res.status(404).json({ message: 'No such user exists.' })
                    : res.json({ message: 'Successfully deleted friend.' })
            )
            .catch(err => res.status(500).json(err.message));
    },
};
