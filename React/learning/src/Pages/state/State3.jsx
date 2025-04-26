import React, { useState } from "react";

const State3 = () => {
    const[isOn,setIsOn]=useState(false);
    const toggleSwitch=()=>{
        setIsOn(!isOn)
    }
    return (
        <div>
            <h1>Toggle Switch</h1>
            <input type="checkbox" onChange={toggleSwitch} value={isOn}/>
            {isOn?"ON":"OFF"}
        </div>
    );
};
export default State3;