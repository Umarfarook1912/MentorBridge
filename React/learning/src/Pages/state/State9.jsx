import React, { useState } from 'react'

const State9 = () => {
    const[input,setInput]=useState('');
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    const handleSubmit=()=>{
        alert(`Submitted:${input}`);
    }
  return (
    <div>
        <h1>Disable based on the state</h1>
        <input type='text' value={input} placeholder='Enter your name' onChange={handleChange}/>
        <br>
        
        </br>
        <button onClick={handleSubmit} disabled={!input}>Submit</button>
    </div>
  )
}

export default State9