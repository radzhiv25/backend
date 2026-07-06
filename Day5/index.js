const express = require('express')
const fs = require('fs')
const { default: mongoose } = require('mongoose')
const { type } = require('os')

const app = express()
const port = 8000

// Connect DB
mongoose
    .connect('mongodb://127.0.0.1:27017/new')
    .then(() => console.log("MongoDB Connected!!"))
    .catch((err) => {
        console.log("Mongo Error:" , err)
    })

// 
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    }
}, {timestamps: true})

const user = mongoose.model('user', userschema)

app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    return res.end(console.log("Hello there"))
})

app.get('/users', async (req, res) => {
    const dbUsers = await user.find({})
    const data = dbUsers.map((item) => {
        return console.log(`Users Name: ${item.name} and Age: ${item.age} !!`)
    })
    // return data.json()
    return res.status(200).json({msg: "Cool things are working !!"})
})

app.post('/send', async (req, res) =>{
    const body = req.body
    if( !body || !body.name || !body.age){
        return res.status(400).json({ msg : "Name and Age are required!!"})
    }

    const result = await user.create({
        name: body.name,
        age: body.age
    })
    console.log(result)
    return res.status(201).json({msg: "Success!!"})
})

app.delete('/users/:id', async (req, res) => {
    console.log("Delete request!!")
    await user.findByIdAndDelete(req.params.id)
    return res.status(200).json("Deleted User!!")
})

app.listen(port, () => { console.log(`Server started at ${port}`) })

