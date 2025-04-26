import { useQuery } from '@tanstack/react-query'
import React from 'react'

const MultiCall = () => {
    const url="https://api.github.com/repos/Umarfarook1912/Blue-Collar"
    const apiCall=async ({queryKey})=>{
        return fetch(queryKey[1]).then((res)=>res.json())
    }
    const repo1=useQuery({
        queryKey:["repo1",url],
        queryFn:apiCall
    })
    const repo2=useQuery({
        queryKey:["repo2","https://api.github.com/repos/mentorbridgeindia/stublab"],
        queryFn:apiCall
    })
    if(repo1.isLoading || repo2.isLoading) return <div>Loading...</div>
    if(repo1.error || repo2.error) return <div>An Error Occured</div>
  return (
    <div>
        <h1>MultiCall</h1>
        <h2>{repo1.data.name}</h2>
        <h2>{repo2.data.name}</h2>
    </div>
  )
}

export default MultiCall