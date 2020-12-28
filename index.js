const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const app = express()

//require .env file
require('dotenv').config()

//tell express to use cors and body-parser
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))
app.use(fileUpload({ createParentPath: true }));

//connect to mongoDb
const uri = process.env.MONGO_URI
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: true,
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
app.use('/api',routes)
app.use('*',(req,res) => {
    res.send({
        status:'hmm',
        message:'Pls, check api endpoint'
    })
})
app.listen(port, () => {
    console.log("server running at port " + port);
    
})
