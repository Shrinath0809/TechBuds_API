const express = require("express");
const userRouter = express.Router();
const { getAllUser, postUser, getUser, updateUser, deleteUser } = require("../controllers/userControllers");

userRouter.route('/users').get(getAllUser).post(postUser);

userRouter.route('/users/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = userRouter;