import mongoose from 'mongoose';
import Todo from '../models/todo.js';

const fetchTodos = async (req, res) => {
    const todos = await mongoose.model('Todo').find({});
    res.status(200).json({ message: 'success', data: todos });
};

const createTodo = async (req, res) => {
    const { todo } = req.body;
    const todoToSave = new Todo({ task: todo, completed: false });
    await todoToSave.save();
    res.status(200).json({ message: 'success' });
};

export { createTodo, fetchTodos };