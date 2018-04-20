const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('config')
const routes = require('./routes/routes')
const Database = require('./database')

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use('/static/', express.static('static'))

if(config.util.getEnv('NODE_ENV') !== 'test') {
  server.use(morgan('combined'))
}

Database.init().then(() => {
  console.log('mongo connected')
}, err => console.error)

routes.init(server)
server.listen(process.env.PORT || config.PORT || 8081)

module.exports = server
