import React from 'react'
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { userDetailsAtom } from '../../Atom/UserDetailsAtom'
import { useAtom } from 'jotai'

const FormCity = () => {
    const [userDetails,setUserDetails]=useAtom(userDetailsAtom);
    const handleChange=(e)=>{
        setUserDetails({...userDetails,city:e.target.value});
    }

    return (
        <div>
            <Form>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" value={userDetails.city} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>

    )
}

export default FormCity