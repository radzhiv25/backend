// const http = require('http');
// const fs = require('fs');

// here we have the usage of express to make the code more modular

const express = require('express');
const { url } = require('inspector');

const PORT = 8000;
const app = express();

app.get("/", (req, res) => {
    return res.end(`Req. from ${req.url} at Home Page`)
})
// get method
app.get("/about", (req, res) => {
    return res.end(`Req. from ${req.url} at About Page.`)
})

app.post('/')

// no need for this as we are using express so we can directly use the app
// const server = http.createServer(app)

app.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);
})