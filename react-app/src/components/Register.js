import React, {useEffect, useState} from "react";
import {Form, Button, Container, Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function RegisterForm() {
    const [emailInput, setEmailInput] = useState("")
    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [birthdateInput, setBirthdateInput] = useState("")

    const queryToInsertUser = async(e) => {
        e.preventDefault()
        console.log(firstNameInput)
        const OUR_DB_URL = "http://localhost:3001/users";
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ firstname: firstNameInput,
                                               lastname: lastNameInput,
                                               email: emailInput,
                                               birthdate: birthdateInput})
                    };
                    const response = await fetch(OUR_DB_URL, requestOptions);
                const data = await response.json();
                console.log(data)
    } 

    // useEffect(() => {
    //     // document.title = `Dbdata - ${displayField}`;
    //     const OUR_DB_URL = "http://localhost:3001/";
    //     const fetchData = async () => {
    //         const response = await fetch(OUR_DB_URL + "Users");
    //         const resData = await response.json();
    //         console.log("RES Data", resData);
    //         if (resData) {
    //             setDbData(resData);
    //             if (resData.length > 0) {
    //                 setDbKeys(Object.keys(resData[0]));
    //                 // console.log("Keys", dbKeys);
    //             }
    //         } else {
    //             setDbData("Not found");
    //         }
    //     };
    //     fetchData();
    // }, []);
   
   
   
   return(
<Row className="justify-content-md-center">
    <Col xs={6}>       
        <Form onSubmit={queryToInsertUser}>
            <h2 className="bookclub-title"> SQLDaddy Bookclub</h2>
    
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" name = "firstname" id="firstname" onChange={(e) => {setFirstNameInput(e.target.value)
                console.log(e.target.value)}}/>
            </Form.Group>
  
            <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" name = "lastname" id="lastname" onChange={(e) => {setLastNameInput(e.target.value)
                console.log(e.target.value)}} />
            </Form.Group>
  
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name = "email" id="email" onChange={(e) => {setEmailInput(e.target.value)
                console.log(e.target.value)}} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Birthdate</Form.Label>
                <Form.Control placeholder="Birthdate" name = "birthdate" id="birthdate" type="Date" onChange={(e) => {setBirthdateInput(e.target.value)
                console.log(e.target.value)}}
                />
            </Form.Group>
  
            <Button variant="primary" type="submit" className="center" >
                Submit
            </Button>
            <h6 className="center">Already have an account? <Link className="nav-link" to="/login">Login!</Link></h6>
        </Form>
    </Col>
</Row>
)
}