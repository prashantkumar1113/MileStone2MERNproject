import React from "react";
import {Form, Button} from "react-bootstrap";

export default function LoginForm() {
    return(
    <Form>
    <h2 className="bookclub-title"> SQLDaddy Bookclub</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}