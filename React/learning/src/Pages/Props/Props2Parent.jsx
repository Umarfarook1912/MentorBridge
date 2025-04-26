import React, { useState } from 'react'
import Props2Child from './Props2Child'
const Props2Parent = () => {
    const[count,setCount]=useState(0);
  return (
    <div>
        <h1>Passing Number Props</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Props2Child count={count}/>
    </div>
  )
}

export default Props2Parent