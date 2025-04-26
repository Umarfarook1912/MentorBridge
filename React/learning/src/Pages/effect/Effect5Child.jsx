import React, { useEffect } from 'react'

const Effect5Child = () => {
    useEffect(() => {
        console.log("Component Mounted");
        return()=>{
            console.log("Component Unmounted");
        }
    },[]);
  return (
    <div>
        <h1>I am the child Component</h1>
    </div>
  )
}

export default Effect5Child