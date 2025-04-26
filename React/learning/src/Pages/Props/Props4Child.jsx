import React from 'react'
import propTypes from 'prop-types'
const Props4Child = ({isLog}) => {
  return (
    <div>
            
            <h1>Child Component</h1>
            <h2>{isLog ? 'Logged In' : 'Logged Out'}</h2>
    </div>
  )
}
Props4Child.propTypes={
    isLog:propTypes.bool
}
Props4Child.defaultProps={
    isLog:false
}
export default Props4Child