import React from 'react'
import Props8Child from './Props8Child'

const Props8Parent = () => {
    return (
        <div>
            <h1>Children Prop Example</h1>
            <Props8Child>
                <p>This content is inside the wrapper!</p>
                <button>Click Me</button>
            </Props8Child>
        </div>
    )
}

export default Props8Parent