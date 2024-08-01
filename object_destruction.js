// import
// const helpers = require('./export');

// const total = helpers.sum(10,220)
// console.log("Total: " + total)

// can be return

const {sum,sub} = require('./export');

const total = sum(10,220)
const subtract = sub(10,6)
console.log("Total: " + total)
console.log("Sub: " + subtract)