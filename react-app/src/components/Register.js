import React from "react";
import {Form, Button, Container, Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function RegisterForm() {
    return(
<Row className="justify-content-md-center">
    <Col xs={6}>       
    <Form>
        <h2 className="bookclub-title"> SQLDaddy Bookclub</h2>
    
    <Form.Group className="mb-3" controlId="formBasicfName">
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="First Name"/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasiclName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Last Name" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBirthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control placeholder="Birthdate" />
    </Form.Group>
  
    <Button variant="primary" type="submit" className="center">
        Submit
    </Button>
    <h6 className="center">Already have an account? <Link className="nav-link" to="/login">Login!</Link></h6>
</Form>
</Col>
</Row>
)
}