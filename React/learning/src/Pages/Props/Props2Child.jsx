import React from 'react'
import PropTypes from 'prop-types'
const Props2Child = ({count}) => {
  return (
    <div>
        <h1>Child Component</h1>
        <h2>Count: {count}</h2>
    </div>
  )
}
Props2Child.propTypes = {
    count: PropTypes.number.isRequired
}

export default Props2Child