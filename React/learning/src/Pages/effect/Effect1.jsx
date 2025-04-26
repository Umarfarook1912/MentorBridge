import React, { useEffect } from 'react'

const Effect1 = () => {
    useEffect(() => {
        console.log("Mount");
    })
  return (
    <div>
        <h1>Basic Mount Effect</h1>

    </div>

  )
}

export default Effect1