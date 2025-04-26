import React from 'react'
import Props6Child from './Props6Child'

const Props6Parent = () => {
  return (
    <div>
        <h1>Parent Component</h1>
        <Props6Child text="text red" color="red" />
        <Props6Child text="text green" color="green" />
        <Props6Child text="text default"/>
    </div>
  )
}

export default Props6Parent