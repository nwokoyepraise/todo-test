const express = require('express');
const app = express();
const port_number = process.env.PORT || 5000;
const server = require('http').createServer(app);
require('./config/mongo_config')();

const home = require('./routes/home');
const todo = require('./routes/todo');

//use and set express middleware
app.use(express.json({ limit: '20kb' }));

//load routes
app.use('/', home);
app.use('/api/todo', todo)



server.listen(port_number, function () {
    console.log(`server listening on port ${port_number}`)
});