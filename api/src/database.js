const mongoose = require('mongoose')
const config = require('config');

const mongoURI = process.env.MONGODB_URI || config.DBHost

const database = {
  init () {
    return mongoose.connect(mongoURI)
  }
}

module.exports = database
