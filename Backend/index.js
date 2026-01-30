//ทำการ import module http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server
const reqestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, Its my first server!');
}

//run server
const server = http.createServer(reqestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});