import { useState } from 'react';
import './App.css';
import Goals from './Components/Goals';
import Header from './Components/Header';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);


  const addTodo = (id,title, info) => {
    console.log(title)
    const newTodo = { id: Date.now(), title, info };
    setTodos([...todos, newTodo]);
  };

  const editTodo = todo => {
    console.log(todo)
    setEditingTodo(todo);
  };

  const saveTodo = (id, title, info) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title, info } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
  };

  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <section className="section-center">
      {editingTodo ? (<Header onSubmit={saveTodo} todo={editingTodo}  />) : (<Header onSubmit={addTodo} />)}
      <Goals todos={todos} onEdit={editTodo} onDelete={deleteTodo} />
    </section>

  );
}

export default App;
