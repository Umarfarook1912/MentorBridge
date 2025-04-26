import React, { useEffect, useRef, useState } from 'react'

const Effect9 = () => {
    const[count,setCount]=useState(0);
    const isFirstRender=useRef(true);
    useEffect(()=>{
        if(isFirstRender.current){
            isFirstRender.current=false;
            return;
        }
        console.log(`Count is ${count}`);
    },[count])
  return (
    <div>
        <h1>Effect on Specific Condition</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Effect9