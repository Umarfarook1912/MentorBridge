import React, { useState } from 'react'

const State8 = () => {
    const[showMessage,setShowMessage]=useState(false);
    const handleToggle=()=>{
      setShowMessage(!showMessage);
    }
  return (
    <div>
        <h1>Conditional based rendering</h1>
        <button onClick={handleToggle}>
          {showMessage?"Hide Message":"Show Message"}
        </button>
        {showMessage&& <p>This is a toggle Message  </p>}
    </div>
  )
}

export default State8