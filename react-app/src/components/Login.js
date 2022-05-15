import React from "react";
import {Form, Button, Card, Container, Row, Col} from "react-bootstrap";

export default function LoginForm() {
    return(
    <Row className="justify-content-md-center">
        <Col xs={6}>  
            <Form>
                <h2 className="center"> SQLDaddy Bookclub</h2>
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
        </Col>
    </Row>
 )
}