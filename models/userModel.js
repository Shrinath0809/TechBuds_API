const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: [true, "Please enter a user name"],
            trim: true
        }
    },
    {
        timestamp: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;