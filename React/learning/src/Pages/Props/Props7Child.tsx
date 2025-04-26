import React from "react";

type User={
    name:string,
    age:number,
    email:string
}
type UserCardProps={
    user:User
}
const Props7Child:React.FC<UserCardProps>=({user})=>{
    
    return(
        <div>
            <h1>Props7Child</h1>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    )
}
export default Props7Child;