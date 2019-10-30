import React from 'react';
import "./Opretkonto.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const OpretKonto = () => {
   
    return (
        <div className="OpretKonto">
            <Form className="OpretKontoForm">
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>First name*</Form.Label>
                            <Form.Control placeholder="First name" required/>
                        </Col>
                        <Col>
                            <Form.Label>Last name*</Form.Label>
                            <Form.Control placeholder="Last name" required/>
                        </Col>
                    </Row>
                </Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password*</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address*</Form.Label>
                    <Form.Control placeholder="1234 Main St" required/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor"/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City*</Form.Label>
                        <Form.Control required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Country*</Form.Label>
                        <Form.Control as="select" required>
                            <option>Denmark</option>
                            <option>UK</option>
                            <option>United States</option>
                            <option>Germany</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip*</Form.Label>
                        <Form.Control required/>
                    </Form.Group>
                </Form.Row>

                <Form.Group className="d-flex justify-content-md-center" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required/>
                    <Form.Check className="pl-5" type="checkbox" required/>
                    <p>Accept our</p> <a className="pl-1" href="#">conditions</a>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>

        </div>
    )
}

export default OpretKonto;