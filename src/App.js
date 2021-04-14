const express = require('express')
const cors = require('cors')
const router = require('./routes')
const { notFoundResponse } = require('./middleware')

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use(notFoundResponse)

module.exports = app
