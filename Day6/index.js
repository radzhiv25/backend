const express = require('express')

const app = express()
const port = 8000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use((req, res, next) => {
    console.log("Here we are passing a middleware");
    next()
})

app.get('/users', (req, res) => {
    return res.end("Hello there")
})

app.listen(port, () => {console.log(`Server started at : ${port}`)})