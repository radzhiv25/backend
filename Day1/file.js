// fs -> file system
const fs = require("fs")

// synchronous way to write a file
// fs.writeFileSync("./log.txt", "Hello, this is log file text")

// asynchronous way to write a file
fs.writeFile("./log.txt", "Hello, this is log file text", (err) => {})

const data = fs.readFileSync("./contact.txt", "utf-8")
console.log(data)

fs.readFile("./contact.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

fs.appendFile("./contact.txt", "\nRaj: 9876543210", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File appended successfully")
    }
})