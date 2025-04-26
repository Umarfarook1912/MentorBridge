import React, { useState } from 'react'

const State2 = () => {
    const[text,setText]=useState('');
    const handleChange=(e)=>{
        setText(e.target.value); 
    }
  return (
    <div>
        <h1>User Input</h1>
        <input type="text" value={text} onChange={handleChange}/>
        <h2>You typed: {text}</h2>
    </div>
  )
}

export default State2