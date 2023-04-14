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
    <div className=''>
        <h3>My Goals For Today</h3>
        <section className='section-div'>
        <form className='form-div' onSubmit={handleSubmit}>
      <div className='form-control'>
      <h4>Title:</h4>
      <input
        type="text"
        id="title"
        className='todo'
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <h4>Description:</h4>
      <input
        type="text"
        className='todo'
        id="info"
        name="info"
        value={info}
        onChange={e => setInfo(e.target.value)}
      />

      <button className='submit-btn' type="submit">{todo ? 'Save' : 'Add Todo'}</button>
      </div>
    </form>
    
    </section>
    </div>
  )
}

export default Header