const express = require('express')
const { connectToMongoDb } = require('./connect')
const urlRoute = require('./routes/url')

const URL = require('./models/url')

const app = express()
const port = 8000

connectToMongoDb('mongodb://127.0.0.1:27017/shorturl')
    .then(() => { console.log("DB connected") })

app.use(express.json())
app.use('/url', urlRoute)


app.listen(8000, () => { console.log(`Server started at  ${port}`) })