const express = require('express')
const app = express()
const router = require('./Routes/Route')   
const conn = require('./Connection/conn') 
require('dotenv').config()

conn()

app.use('/', router)

app.listen(process.env.port, () => {
    console.log("Server is up and running at port " + process.env.port)
})