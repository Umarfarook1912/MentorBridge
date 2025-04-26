import React, { useEffect, useState } from 'react'

const Effect7 = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`Count is ${count}`);
    },[count]);
    useEffect(()=>{
        console.log("Component Mounted");
    },[]);
  return (
    <div>
        <h1>Multiple Effect</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Effect7