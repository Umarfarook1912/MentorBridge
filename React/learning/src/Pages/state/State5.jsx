import React, { useState } from 'react'

const State5 = () => {
    const initialValue='Umar';
    const[name,setName]=useState(initialValue);
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleReset=()=>{
        setName(initialValue);
    }
  return (
    <div>
        <h1>Reset to Initial Value</h1>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleChange}/>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default State5