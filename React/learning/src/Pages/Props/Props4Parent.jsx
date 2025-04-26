import React from 'react'
import Props4Child from './Props4Child'

const Props4Parent = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Props4Child isLog={true}/>
            <Props4Child/>
        </div>
    )
}

export default Props4Parent