const router = require('express').Router()
const Todo = require('../models/Todo.model')

//get all todo list
router.get('/',(req,res) =>{
    Todo.find().then((todo) =>{
        res.json({
            'status':'success',
            'message':'All todo List',
            'data':todo
        })
    }).catch((err)=>{
        res.status(500).json({
            'status':'error',
            'message':err.message
        })
    })
})

//post todo item
router.post('/add',(req,res) =>{
    const {title,description,done,priority} = req.body
    const newTodo = new Todo({title,description,done,priority})

    newTodo.save()
    .then(()=>{
        res.json({
            'status':'success',
            'message':'Successfully Added Todo Item'
        })
    }).catch(err =>res.status(400).json({'status':'error', 'message':err.message}))
})

//update todo item by id
router.put('/:id/update', (req, res) =>{
    var update = req.body

    Todo.findOneAndUpdate({_id:req.params.id},update,{new:true}).then(()=>{
        res.json({'status':'sucsess','message':'Update Successfully'})
    }).catch((err)=>{
        res.json(400).json({
            'status':'error',
            'message':err.message
        })
    })
})

//delete todo ite by id
router.delete('/:id/delete',(req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.json({
            'status':'success',
            'message':'Delete Successfully'
        })
    }).catch((err)=>{
        res.status(400).json({
        'status':'error',
        'message': err.message
        })
    })
})

module.exports = router