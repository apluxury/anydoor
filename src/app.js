const http = require('http');
const conf = require('./config/defaultConfig')
const path = require('path')
const route = require('./helper/route')

const server = http.createServer((req, res) => {
    const filePath = path.join(conf.root, req.url);
    route(req, res, filePath);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // // res.setHeader('Content-Type', 'text/plain');
    // res.end(filePath)
})

server.listen(conf.prot, conf.hostname, () => {
    console.log(`服务器运行在  http://${conf.hostname}:${conf.prot}/`);
})