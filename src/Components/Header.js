import React, { useState } from 'react'

const Header = ({setData, data}) => {
    const [title, setTitle] = useState('')
    const [info, setInfo] = useState('')

    const handleSubmit = () => {
            setData([...data, {title:title, info:info}])
    }
  return (
    <div>
        <h3>My Goals For This Book</h3>
        
            <input value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter a Title'
            />
            <input value={info} onChange={(e) => setInfo(e.target.value)}
                placeholder='Enter a Info'
            />
            <button onClick={handleSubmit}>Add</button>
        
    </div>
  )
}

export default Header