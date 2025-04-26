import React, { useEffect, useState } from 'react'

const Effect11 = () => {
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(prev=>prev+1);
    }
    useEffect(()=>{
        console.log(`Count is ${count}`);
    },[count])
  return (
    <div>
        <h1>Based on state change Effect happen</h1>
        <h2>Count:{count}</h2>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Effect11