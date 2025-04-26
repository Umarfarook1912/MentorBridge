import { useAtom } from 'jotai';
import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { userDetailsAtom } from '../../Atom/UserDetailsAtom';


const FormName = () => {
    const[userDetails,setUserDetails]=useAtom(userDetailsAtom);
    const handleChange=(e)=>{
        setUserDetails({...userDetails,name:e.target.value});
    }
    return (
        <div>
            <Form>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        value={userDetails.name}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    )
}

export default FormName