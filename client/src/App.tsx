import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [value, setValue] = useState('');
  const [todoData, setTodoData] = useState<{
    task: string;
    completed: boolean;
  }[]>([]);

  const handleSubmit = () => {
    setTodoData([...todoData, {
      task: value,
      completed: false,
    }]);
    setValue('');
    axios.post('http://localhost:9000/api/v1/todo/createTodo', {
      todo: value
    });
  }

  useEffect(() => {
    // Call an API to get the todo data
    const fetchData = async () => {
      const response = await axios.get('http://localhost:9000/api/v1/todo/fetchTodos');
      if (response.status === 200 && response.data && response.data.message === 'success') {
        setTodoData(response.data.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todoData.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </>
  )
}

export default App
