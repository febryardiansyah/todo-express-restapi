const mongoose = require('mongoose')
const Shema = mongoose.Schema

//monggodb schema
const todoShcema = new Shema({
    title:{
        type: String,
        required: true,
        minlength:3,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        minlength:5,
        trim:true,
    },
    priority:{
        type: Number,
        required: true,
        min:0,
        max:10,
    }
},{
    timestamps:true
})

// add to mongoose model
const Todo = mongoose.model('Todo',todoShcema)

module.exports = Todo