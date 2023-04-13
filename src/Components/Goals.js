import React from 'react'

const Goals = ({ todos, onEdit, onDelete }) => {
  return (
    <div>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.info}</p>
          <button onClick={() => onEdit(todo)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Goals