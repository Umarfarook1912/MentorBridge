import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FormName from './FormName';
import FormSummary from './FormSummary';
import FormCity from './FormCity';
import FormState from './FormState';
import FormZip from './FormZip';

const FormDetails = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <h1>User Detais</h1>
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <FormName />

                    </Row>
                    <Row className="mb-3">
                        <FormCity />

                    </Row>
                    <Row className="mb-3">
                        <FormState />

                    </Row>
                    <Row className="mb-3">
                        <FormZip />

                    </Row>

                    <Button type="submit">Submit form</Button>
                </Form>
            </Container>
            <FormSummary />
        </>
    )
}

export default FormDetails;