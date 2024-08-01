const fs = require('fs')
const fileName = "target.txt"

fs.readFile(fileName, (err,data) => { // running 2nd cz it has bit func
    if(err){
        console.log(err)
    }
    // console.log(data)
    console.log(data.toString())
});

console.log("Node Js Async Data") // it is simple so ran 1st

