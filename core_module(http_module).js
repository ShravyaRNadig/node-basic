const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("hello from node.js");
    // res.end("hello world");
})

server.listen(2000);