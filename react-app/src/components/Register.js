import React from "react";
import {Form, Button } from "react-bootstrap";

export default function RegisterForm() {
    return(
<Form>
    <h2 className="bookclub-title"> SQLDaddy Bookclub</h2>
    
  <Form.Group className="mb-3" controlId="formBasicfName">
    <Form.Label>First Name</Form.Label>
    <Form.Control placeholder="First Name" />
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
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <h6>Already have an account? <a href = "login route">Login!</a></h6>
</Form>
)
}