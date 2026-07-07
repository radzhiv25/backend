const fs = require("fs")
const os = require("os")
// this is synchronous calls
fs.writeFileSync('./text.txt', "Created file using Node funtion")

// this is asynchronous call (Non Blocking Operation)
fs.writeFile('./text.txt', "Created file using synchronous", (err) => {})

// this is synchronous reading (Blocking Operation)
// const result = fs.readFileSync('./contacts.txt', "utf-8")
// console.log(result)

// this is asynchronous reading where error handling is mandatory
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if(err){
        console.log(err);
    } else {
        console.log(result);
    }
})

fs.appendFileSync("./contacts.txt", "\nRoman : 280958902")

// default thread pool size - 4 and i can expand it upto the cores i have on my system

console.log(os.cpus().length)