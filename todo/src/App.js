import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '' && newDescription.trim() !== '') {
      setTodos([...todos, { text: newTodo, description: newDescription, completed: false }]);
      setNewTodo('');
      setNewDescription('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
    <div className="App">
       <h1>TODO LIST</h1>
     <p>Add Your Todo Now  </p>
      <div className="input-container">
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Add a new todo" 
        />
        <input 
          type="text" 
          value={newDescription} 
          onChange={(e) => setNewDescription(e.target.value)} 
          placeholder="Add a description" 
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <div className="todo-item" onClick={() => toggleTodo(index)}>
              <span className="todo-text">{todo.text}</span>
              <span className="todo-description">{todo.description}</span>
            </div>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
