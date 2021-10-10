import { Router } from 'express'

import Todo from '../models/todo.model'

const todoRouter = Router()

// todos list endpoint
todoRouter.get('/', async (req, res) => {
  try {
    // get all todos from the DB
    const todos = await Todo.find()

    // return the todos
    res.json(todos)
  } catch (error: any) {
    res.status(500).json({ error: `${error.message}` })
  }
})

// todo post endpoint
todoRouter.post('/', async (req, res) => {
  try {
    // construct the to do to save from request payload
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endData: req.body.endData,
      status: req.body.status,
    })

    await todo.save()

    // return the saved todo
    res.status(201).json({
      message: 'Todo saved!',
      todo: todo,
    })
  } catch (error: any) {
    res.status(500).json({ error: `${error.message}` })
  }
})

// todo retrieve endpoint
todoRouter.get('/:id', async (req, res) => {
  try {
    // get all todos from the DB
    const todo = await Todo.findById(req.params.id)

    // return the todo
    res.json(todo)
  } catch (error: any) {
    res.status(500).json({ error: `${error.message}` })
  }
})

// todo update endpoint
todoRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endData: req.body.endData,
      status: req.body.status,
    })

    await Todo.findByIdAndUpdate(id, { $set: todo }, { new: true })
    // return the saved todo
    res.status(201).json({
      message: 'Todo updated!',
      todo: todo,
    })
  } catch (error: any) {
    res.status(500).json({ error: `${error.message}` });
  }
})

// todo delete endpoint
todoRouter.delete('/:id', async (req, res) => {
    try {
      // get all todos from the DB
      await Todo.findByIdAndRemove(req.params.id)
  
      // return the todo
      res.status(204).json({succes: 'todo deleted'})
    } catch (error: any) {
      res.status(500).json({ error: `${error.message}` })
    }
  })
  

export default todoRouter
