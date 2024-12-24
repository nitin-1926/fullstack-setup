import { Router } from 'express';
import * as Todo from './modules/Todo.js';

const router = Router();
export default router;

// Todo routes
router.get('/api/v1/todo/fetchTodos', Todo.fetchTodos);
router.post('/api/v1/todo/createTodo', Todo.createTodo);
