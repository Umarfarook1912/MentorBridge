import React, { useState } from "react";
const State4=()=>{
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const handleText=(e)=>{
        setName(e.target.value);
    }
    const handleAge=(e)=>{
    setAge(e.target.value);
    }
    return(
        <div>
            <h1>Multiple State</h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleText}/>
            <input type="number" placeholder="Enter your age" value={age} onChange={handleAge}/>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
        </div>
    )
}
export default State4;