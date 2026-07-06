// const math = require("./math")
const { add, multiply } = require("./math")

console.log("Hello World");
// console.log(math.multiply(9,10))
console.log(add(8,9))
// console.log(sub(5,2))

setTimeout(() => {
    console.log("I am logging after 3 seconds")
}, 3000)

function closureShown() {
    console.log("Start")

    setTimeout(() => {
        console.log("I am logging after 1 seconds")
    }, 1000)

    Promise.resolve().then(() => console.log("Hi I am from Promise"))

    console.log("End")
}

closureShown()