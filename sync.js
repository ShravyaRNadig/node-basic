const fs = require('fs')
const fileName = "target.txt"

const data = fs.readFileSync(fileName)
console.log(data.toLocaleString())

console.log("Node Js Sync Data")
