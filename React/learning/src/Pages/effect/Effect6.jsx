import React, { useEffect, useState } from 'react'

const Effect6 = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Count : ${count}`;
    },[count])
  return (
    <div>
        <h1>Document with title Change</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(Prev=>Prev+1)}>Increment</button>
    </div>
  )
}

export default Effect6