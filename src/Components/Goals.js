import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Goals = ({ todos, onEdit, onDelete }) => {
  return (
    <div className='todo-list'>
    <ul>
      {todos.map(todo => (
        <article className='todo-item' key={todo.id}>
          <h3>{todo.title}</h3>
          <p className='title'>{todo.info}</p>
          <div className='btn-container'>
          <button  className='edit-btn' onClick={() => onEdit(todo)}><FaEdit/></button>
          <button className='delete-btn' onClick={() => onDelete(todo.id)}><FaTrash/></button>
          </div>
        </article>
      ))}
    </ul>
    </div>
  )
}

export default Goals