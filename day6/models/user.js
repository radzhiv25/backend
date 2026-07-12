const mongoose = require('mongoose')


// Create Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobType: {
        type: String,
    },
    gender: {
        type: String,
    },
},
    { timestamps: true });

// Create Model
const User = mongoose.model("User", userSchema);


module.exports = User;