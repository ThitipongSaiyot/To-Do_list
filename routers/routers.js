const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todocontrollers')

router.post('/',todoController.createTodo)
router.get('/',todoController.getAllTodo)
router.get('/:id',todoController.getTodobyid)
router.put('/:id',todoController.UpdateTodo)
router.delete('/:id',todoController.deleteTodo)

module.exports = router