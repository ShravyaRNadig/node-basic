const fs = require('fs')
const fileName = "target.txt"

const errHandler = err => console.log(err)

const dataHandler = data => console.log(data.toString())

fs.readFile(fileName, (err,data) => { // running 2nd cz it has bit func
    if(err){
        errHandler(err)
    }
    // console.log(data)
    dataHandler(data.toString())
});

console.log("Node Js Data") // it is simple so ran 1st

