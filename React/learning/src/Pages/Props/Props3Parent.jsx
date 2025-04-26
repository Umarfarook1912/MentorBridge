import React from 'react'
import Props3Child from './Props3Child';

const Props3Parent = () => {
    const fruits=['apple', 'banana', 'orange'];
  return (
    <div>
        <h1>Parent Component</h1>
        <Props3Child items={fruits}/>
    </div>
  )
}

export default Props3Parent