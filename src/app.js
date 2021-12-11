const express = require('express');
const app = express();
const port_number = process.env.PORT_NUMBER || 3000;

const server = require('http').createServer(app);



server.listen(port_number, function () {
    console.log(`server listening on port ${port_number}`)
});