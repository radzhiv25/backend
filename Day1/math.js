function add(a,b){
    return a + b
}
function multiply(a,b){
    return a * b;
}

// single export
module.exports = { add, multiply } 

// module.exports = {
//     addFn: add,
//     multiplyFn: multiply
// }

// one of the ways
// exports.subtract = (a,b) =>  a - b 