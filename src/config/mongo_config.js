
require('dotenv').config();
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todocluster0.gdvj9.mongodb.net/tododb?retryWrites=true&w=majority`;


const connect = async () => {

  await mongoose
    .connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB connection successful!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;