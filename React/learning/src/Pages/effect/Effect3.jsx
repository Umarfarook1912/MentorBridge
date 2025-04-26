import React, { useEffect, useState } from "react";

const Effect3 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Setting Up interval");
        const interval = setInterval(() => {
           
            setCount(prev => prev + 1);
        },1000);
        return()=>{
            console.log("Clearing interval");
            clearInterval(interval);
        }
    },[]);
    return (
        <div>
            <h1>Time Interval</h1>
            <h2>Count:{count}</h2>
        </div>
    )
}
export default Effect3