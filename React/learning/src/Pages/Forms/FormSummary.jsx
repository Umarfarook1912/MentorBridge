import { useAtomValue } from 'jotai'
import React from 'react'
import { FormLabel } from 'react-bootstrap'
import { userDetailsAtom } from '../../Atom/UserDetailsAtom'

const FormSummary = () => {
    const userDetails=useAtomValue(userDetailsAtom);
  return (
    <div>
        <h1>Form Summary</h1>
        <FormLabel>Name</FormLabel>
        <h2>{userDetails.name}</h2>
        <FormLabel>City</FormLabel>
        <h2>{userDetails.city}</h2>
        <FormLabel>State</FormLabel>
        <h2>{userDetails.state}</h2>
        <FormLabel>Zip</FormLabel>
        <h2>{userDetails.zip}</h2>
    </div>
  )
}

export default FormSummary