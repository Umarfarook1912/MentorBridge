import React from 'react'
import propTypes from 'prop-types'
const Props3Child = ({items}) => {
  return (
    <div>
        <h1>List of Fruits</h1>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

Props3Child.propTypes={
    items:propTypes.arrayOf(propTypes.string).isRequired
}

export default Props3Child