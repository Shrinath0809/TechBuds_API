const User = require("../models/userModel");

let getAllUser = async (req, res) => {
    try {
        let user = await User.find();
        res.send(user)
    }
    catch (error) {
        res.json({
            "error": error.message
        })
    }
}

let postUser = async (req, res) => {
    let { user } = req.body;
    try{
        await User.create({
            "user": user
        })
        res.send(user)
    }
    catch (error) {
        res.json({
            "error": error.message
        })
    }
}

let getUser = async (req, res) => {
    try {
        let id = req.params.id;
        let user = await User.findById(id);
        res.send(user);
    }
    catch (error) {
        res.json({
            "error": error.message
        })
    }
}

let updateUser = async (req, res) => {
    try {
        let {user} = req.body;
        let id = req.params.id;
        let updateUser = await User.updateOne({"_id":id},{$set:{user:user}});
        res.send(updateUser);
    }
    catch (error) {
        res.json({
            "error": error.message
        })
    }
}

let deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        let deletedUser = await User.deleteOne({_id:id});
        res.json(deletedUser);
    }
    catch (error) {
        res.json({
            "error": error.message
        })
    }
}

module.exports = {
    getAllUser,
    postUser,
    getUser,
    updateUser,
    deleteUser
}