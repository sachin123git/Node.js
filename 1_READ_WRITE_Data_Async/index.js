const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
    const data = "sachin patil";
    const filePath = path.join(__dirname, 'd_data.txt');

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error("Error writing data to dummy_data.txt:", err);
        } else {
            console.log("Data is written to dummy_data.txt");
            fs.readFile(filePath, 'utf8', (err, fileData) => {
                if (err) {
                    console.error("Error reading data from dummy_data.txt:", err);
                    res.end("Error reading data from dummy_data.txt");
                } else {
                    console.log("Data read from dummy_data.txt:", fileData);
                    res.end(fileData);
                }
            });

        }
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Server is ready!");
});
