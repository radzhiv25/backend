const mongoose = require('mongoose')

mongoose
    .connect('http://')
    .then(() => console.log("Ayo wassup!!"))
    .catch((err) => {
        console.log("Error message: ", err)
    })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: false
    },
    age: {
        type: Number,
        require: false
    }
},{timestamps: true})

const user = mongoose.model('user', userSchema)

module.exports = 'user'