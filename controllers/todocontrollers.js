const Todo = require('../model/todo')

// create new To-Do
exports.createTodo = async (req,res) =>{
  try{
    const {title , description} = req.body 
    if(!title){
      res.status(400).json({message:"Title is required"})
    }
    const NewTodo = new Todo({title,description})
    await NewTodo.save()
    res.status(201).json(NewTodo)
  }catch(error) {
    res.status(500).json({message:error.message})
  }
}

// Get all TODO list 
exports.getAllTodo = async (req,res) =>{
  try{
    const todos = await Todo.find()
    res.status(200).json(todos)
  }catch(error){
    res.status(500).json({message:error.message})  
  }
}

// Get bi Id
exports.getTodobyid = async (req,res)=>{
  try{
    const todo = Todo.findById(req.params.id)
    if(!todo) {
      res.status(404).json({message:"To-Do not found"})
    }
    res.status(200).json(todo)
  }catch(error) {
    res.status(500).json({message:error.message})
  }
}

// Update To-Do
exports.UpdateTodo = async (req,res) =>{
  try{
    const {title,description,complete} = req.body
    const update = await Todo.findByIdAndUpdate(
      req.params.id,
      {title,description,complete},
      {new:true,runValidators:true}
    )
    if(!update){
      res.status(404).json({message:"To-Do not found"})
    }
    res.status(200).json(update)
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

// Delete To-Do
exports.deleteTodo = async (req,res) =>{
  try{
    const deletetodo = await Todo.findByIdAndDelete(req.params.id)
    if(!deletetodo){
      res.status(404).json({message:"Not Found"})
    }
    res.status(200).json(deletetodo)
  }catch(error){
    res.status(500).json({message:error.message})
  }
}