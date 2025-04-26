import React, { useState } from 'react'

const State6 = () => {
    const [items,setItems]=useState([]);
    const [input,setInput]=useState('');
    const handleAddItem=()=>{
        if(input.trim()){
            setItems([...items,input]);
            setInput('');
        }
    }
  return (
    <div>
        <h1>Item List</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type="button" onClick={handleAddItem}>Add Item</button>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default State6