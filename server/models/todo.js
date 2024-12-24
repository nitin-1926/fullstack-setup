import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
