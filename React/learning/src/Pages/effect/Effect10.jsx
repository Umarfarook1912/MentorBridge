import React, { useEffect, useState } from 'react'

const Effect10 = () => {
    const[count,setCount]=useState(0);
    const[input,setInput]=useState('');
    useEffect(()=>{
        console.log(`Count is ${count}`);
    },[count]);
  return (
    <div>
        <h1>One state Effect will not affect other state</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <br></br><br></br>
        <label>Name: {input}</label><br></br><br></br>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default Effect10