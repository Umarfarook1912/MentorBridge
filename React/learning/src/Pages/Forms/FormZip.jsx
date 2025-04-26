import { useAtom } from 'jotai';
import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { userDetailsAtom } from '../../Atom/UserDetailsAtom';
const FormZip = () => {
    const[userDetails,setUserDetails]=useAtom(userDetailsAtom);
    const handleChange=(e)=>{
        setUserDetails({...userDetails,zip:e.target.value});
    }
    return (
        <div>
            <Form>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" value={userDetails.zip} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    )
}

export default FormZip