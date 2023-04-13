import React, { useState,useEffect } from 'react'

const Header = ({ onSubmit, todo }) => {
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
  
    useEffect(() => {
      if (todo) {
        setTitle(todo.title);
        setInfo(todo.info);
      }
    }, [todo]);
  
    const handleSubmit = e => {
        e.preventDefault();
       
        if (todo) {
          onSubmit(todo.id, title, info);
          
        } else {
            
          onSubmit(null, title, info);
        }
        setTitle('');
        setInfo('');
      };
  
    
  return (
    <div>
        <h3>My Goals For This Book</h3>
        
        <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <label htmlFor="info">Info:</label>
      <input
        type="text"
        id="info"
        name="info"
        value={info}
        onChange={e => setInfo(e.target.value)}
      />

      <button type="submit">{todo ? 'Save' : 'Add Todo'}</button>
    </form>
        
    </div>
  )
}

export default Header