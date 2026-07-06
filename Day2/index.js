const http = require('http')
const fs = require('fs')
// const { URL } = require('url')
const express = require('express')
const port = 8000

const app = express();

app.get('/',(req, res)=>{
    return res.end("Ayo, Bro")
})
// const server = http.createServer((req, res) => {
//     console.log("a request is recieved!")
//     console.log(req.url)
//     // console.log(req)
//     const log = `${Date.now()} : ${req.url}  New User\n`
//     fs.appendFile('log.txt', log, (err, res) => {
//         switch(req.url){
//             case '/':
//                 res.end("Home Page")
//                 break;
//             case '/about':
//                 res.end(`About Page`)
//                 break;
//         }
//     })
//     // res.end("Ayo, bro")
// })

// const server = http.createServer(app)

// server.listen(8000, () => console.log("I am started now!"))

app.listen(port, () => console.log(`Server Started at ${port}`))

