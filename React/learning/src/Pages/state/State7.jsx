import React, { useState } from 'react'

const State7 = () => {
    const [user,setUser]=useState({
        name:"umar",
        age:22,
        email:"umar@gmail.com"
    })
    const handleUpdate=(e)=>{
        setUser({...user,name:e.target.value});
    }
  return (
    <div>
        <h1>managing Object in the State</h1>
        <input type="text" value={user.name} onChange={handleUpdate} />
        <h2>Name: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h2>Email: {user.email}</h2>
    </div>
  )
}

export default State7