const express = require('express');
const app = express();
const port_number = process.env.PORT_NUMBER || 3000;
const server = require('http').createServer(app);
require('./config/mongo_config')();

const home = require('./routes/home');

//load routes
app.use('/', home);



server.listen(port_number, function () {
    console.log(`server listening on port ${port_number}`)
});