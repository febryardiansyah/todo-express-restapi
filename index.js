const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

//require .env file
require('dotenv').config()

//tell express to use cors and body-parser
app.use(cors())
app.use(bodyParser.json())

//connect to mongoDb
const uri = process.env.MONGO_URI
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
mongoose.connection.on('connected',()=>{
    console.log('connected to MongoDB');
})
mongoose.connection.on('error',(err)=>{
    console.log('failed to connect to MongoDB',err);
    
})

//route and run
const port = process.env.PORT ||3000
const routes = require('./routers/routes')
app.use(routes)
app.listen(port, () => {
    console.log("server running at port " + port);
    
})
