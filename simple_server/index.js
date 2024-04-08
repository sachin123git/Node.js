const fs = require('fs');
const http = require('http');
const EventEmitter = require('events')
const event =  new EventEmitter()

// const server = http.createServer((req, res) => {
//     res.end('getting the response from server')
// })

// server.listen(3000, () => {
//     console.log('server is running on port 3000')
// })

const server = http.createServer()


server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.end('Hello World!')
    const rstream = fs.createReadStream('random.txt')
    rstream.pipe(res)
    const data  = "this is a random data"
    fs.writeFile('random.txt' , data , (err, data) => {
        if (err) {
            console.error("Error writing data to dummy_data.txt:", err);
        } else {
            fs.readFile('random.txt' , "utf-8" , (err, data)=>{
                console.log(data)
            })
        }
    })
})

server.listen(3000, () => {
    console.log('server is running on port 3000')
})