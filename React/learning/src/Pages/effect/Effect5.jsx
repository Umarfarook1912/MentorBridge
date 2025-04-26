import React, { useState } from 'react'
import Effect5Child from './Effect5Child';

const Effect5 = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Toggle child component</h1>
            <button onClick={
                () => setShow(!show)
            }>{show ? "Hide" : "Show"}</button>
            {show && <Effect5Child/>}
        </div>
    )
}

export default Effect5