import React, { useEffect, useState } from 'react'

const Effect4 = () => {
    const[input,setInput]=useState('');
    useEffect(()=>{
        console.log(`Input is Updated:${input}`);
    },[input])
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
  return (
    <div>
        <h1>Effect with input state</h1>
        <input type="text" value={input} onChange={handleChange}/>
    </div>
  )
}

export default Effect4