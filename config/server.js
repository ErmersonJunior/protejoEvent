const express = require('express');
const server = express();

server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

module.exports = server;