import React from 'react'
import Props7Child from './Props7Child.tsx'
const Props7Parent = () => {
    const user={
        name:"John",
        age:30,
        email:"john@gmail.com"
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <Props7Child user={user}/>
    </div>
  )
}

export default Props7Parent