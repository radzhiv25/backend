const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
const port = 8000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
// Use the cors middleware
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend's actual URL/port
}));

app.get('/', (req, res) =>{
    // req.body()
    console.log("Hello")
    return res.json("Hello from backend bro!!!")
})

app.post('/send', (req, res) => {
    const body = req.body
    // console.log(body)
    // const newBody = JSON.stringify(body)
    // console.log(newBody)
    return res.end(`User Input: ${body}`)
})

app.listen(port, () => { console.log(`Server started at port: ${port}`) })