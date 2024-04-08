const fs = require('fs')
const http = require('http');
const EventEmitter = require('events')
const event = new EventEmitter()

const server = http.createServer()

server.on('request', (req, res) => {
    const data = "this is a server data and should "

    fs.writeFileSync('server.txt', data);
    console.log('Data saved to server');

    if (req.url === '/') {

        event.on('message', ( msg , num) =>{
                res.end(`${msg} ${num}`)
        })
        event.emit('message', 'this is a home page',200)
        
    } else if (req.url === '/About') {
        fs.readFile('biodata.txt', 'utf8', (err, data) => {
            if (err) {
                console.log('have a error')
            } else {
                fs.writeFile('jsondata.json', data, (err) => {
                    if (err) {
                        console.log('have a error')
                    } else {
                        fs.readFile(`jsondata.json`, 'utf-8', (err, data) => {
                            if (err) {
                                console.log('have a error')
                            } else {
                                res.end(data)
                                console.log("data is response", data)
                            }
                        })
                    }
                })
            }
        })

    } else if (req.url === '/contact') {
        fs.readFile('server.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log('have a error')
            } else {
                res.end(data)
                console.log("data is response", data)
            }
        })
        
    } else if(req.url === '/brand'){
        const stream = fs.createReadStream('server.txt')
        stream.pipe(res)
    }else {
        console.log('page not found')
        res.end('404 Page Not Found');
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('server is running on port 3000')
})