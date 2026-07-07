// A better convention is to use index.js

// built-in package
const http = require('http');
const fs = require('fs')

const port = 8000;
const server = http.createServer((req, res) => {
    const log = `\n${Date.now()}: New request rcd.`
    fs.appendFile("./log.txt", log, (err, result)=> {
        res.end("Hello from server..")
    })
    // console.log(req.headers)
    // console.log(req)

});

server.listen(port, () => {
    console.log(`Server started at ${port}`)
})



