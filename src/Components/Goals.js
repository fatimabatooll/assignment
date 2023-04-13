import React from 'react'

const Goals = ({title, info, handleDelete}) => {
  return (
    <div>
    <h1>{title}</h1>
    <p>{info}</p>
    <button onClick={() => {handleDelete(title)} }>Delete</button>
    </div>
  )
}

export default Goals