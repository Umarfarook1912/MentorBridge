import React from 'react'
import { useQuery } from '@tanstack/react-query'
const Sample = () => {
  const apiCall = async () => {
    const res = await fetch("https://api.github.com/repos/Umarfarook1912/Blue-Collar")
    return await res.json()
  }
  const { isLoading, data, error } = useQuery({ queryKey: ["sample"], queryFn: apiCall })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.full_name}</h1>
    </div>
  )
}

export default Sample