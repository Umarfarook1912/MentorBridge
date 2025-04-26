import React from 'react';

interface GreetingProps{
    name:String;
}

const Props1:React.FC<GreetingProps>=({name})=>{
    return(
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}
export default Props1;