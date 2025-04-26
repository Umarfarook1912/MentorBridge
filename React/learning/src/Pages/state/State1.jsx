import React, { useState } from "react";

const State1=()=>{
    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>You click this times{count}</h2>
            <button onClick={(handleIncrement)}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )

}
export default State1;