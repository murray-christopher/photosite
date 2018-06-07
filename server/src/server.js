const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dust = require('dustjs-helpers')
const cors = require('cors')
const morgan = require('morgan')
const cons = require('consolidate')
const config = require('./config/config')
const model = require('./models/query')


//declare app
const app = express()

//use
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

//route
require('./router')(app)


//listen
app.listen(config.port)
console.log(`Server listening on port ${config.port}`)
