import React, { useState } from 'react'

const State10 = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prevState => prevState + 2);
    }
    return (
        <div>
            <h1>Increment by 2</h1>
            <h2>count:{count}</h2>
            <button onClick={handleClick}>Increment by 2</button>
        </div>
    )
}

export default State10