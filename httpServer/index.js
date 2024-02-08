const http = require('http')
const fs = require('fs')


http.createServer((req,res)=>{
    fs.readFile('hello.txt',(err, data)=>{
        res.write(data)
        return res.end()
    })
    
}).listen(3000, ()=>{
    console.log("server startrf");
})