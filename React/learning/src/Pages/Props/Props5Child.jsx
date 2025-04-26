import React from 'react'
import PropTypes from 'prop-types'
const Props5Child = ({onClick,label}) => {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}
Props5Child.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default Props5Child