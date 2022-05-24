const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/UserController.js');

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friend
router.route('/:userId/friend')
    .post(addFriend);

// /api/users/:userId/friend/:friendId
router.route('/:userId/friend/:friendId')
    .delete(removeFriend);

module.exports = router;
