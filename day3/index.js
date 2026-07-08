const http = require('http')
const fs = require('fs')
const url = require('url')

const PORT = 8000;

const server = http.createServer((req, res) => {
    const log = `\nRequest from : ${req.url}`
    const myUrl = url.parse(req.url)
    fs.appendFile('./logs.txt', log, (err, result) => {
        if(err){
            console.log(err)
        } else {
            console.log(`Req. from ${req.url}`)
        }
    } )
    // console.log(myUrl);

    res.end(`Req. from ${req.url} and the method: ${req.method}`)
})

server.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})