const port = process.env.PORT

//const bodyparser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

server.use(cors(corsOptions));
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(allowCors)

server.listen(process.env.PORT || 3003, function() {
    console.log(`BACKEND is running on port ${process.env.PORT}.`)
})

module.exports = server