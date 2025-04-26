import { useAtom } from 'jotai'
import React from 'react'
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { userDetailsAtom } from '../../Atom/UserDetailsAtom'

const FormState = () => {
    const[userDetails,setUserDetails]=useAtom(userDetailsAtom);
    const handleChange=(e)=>{
        setUserDetails({...userDetails,state:e.target.value});
    }
    return (

        <div>
            <Form>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" value={userDetails.state} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    )
}

export default FormState