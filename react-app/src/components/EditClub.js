import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Form, Row, Col, Button} from "react-bootstrap";

export default function EditClub() {
    const {clubId} = useParams();
    const [club, setClub] = useState({});
    const [clubNameInput, setClubNameInput] = useState("");
    const navigate = useNavigate();

    const updateClub = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                booksisbn: club.booksisbn,
                start_date: club.start_date,
                end_date: club.end_date,
                name: clubNameInput,
            }),
        };
        const response = await fetch(
            `${process.env.REACT_APP_OUR_DB_URL}clubs/${clubId}`,
            requestOptions
        );
        const data = await response.json();
        console.log("EDIT DATA", data);
        navigate("/db/clubs");
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_OUR_DB_URL}clubs/${clubId}`
            );
            const resData = await response.json();
            console.log("Club Data", resData);
            if (resData) {
                // console.log(
                //     "Filter:",
                //     resData.filter((club) => club.email === user.username)
                // );
                setClub(resData);
            } else {
                setClub("Not found");
            }
        };
        fetchData();
    }, [clubId]);

    return (
        <Row className="justify-content-md-center">
            <Col xs={6}>
                <Form onSubmit={updateClub}>
                    <h2 className="center"> SQLDaddy Bookclub</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Club Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={club.name}
                            name="name"
                            id="name"
                            onChange={(e) => {
                                setClubNameInput(e.target.value);
                                console.log(clubNameInput);
                            }}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update club
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
