import React from 'react'
import PropTypes from 'prop-types'
const Props6Child = ({text, color}) => {
    const boxStyle = {
        padding: '20px',
        margin: '10px',
        backgroundColor: '#f0f0f0',
        color: color,
        border: `2px solid ${color}`,
        borderRadius: '8px',
        fontWeight: 'bold',
    };
    return (
        <div style={boxStyle}>{text}</div>
    )
}
Props6Child.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Props6Child