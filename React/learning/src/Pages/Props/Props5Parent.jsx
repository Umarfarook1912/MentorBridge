import React from 'react'
import Props5Child from './Props5Child'

const Props5Parent = () => {
    const handleClick = () => {
        alert("Button clicked");
    }
    return (
        <div>
            <h1>Reusable button and label using Props</h1>
            <Props5Child label="click Me" onClick={handleClick} />
        </div>
    )
}

export default Props5Parent