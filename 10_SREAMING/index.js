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
    const rstream = fs.createReadStream('data.txt')
    rstream.pipe(res)
})

server.listen(3000, () => {
    console.log('server is running on port 3000')
})