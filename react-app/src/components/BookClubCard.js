import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

export default function BookClubCard({club}) {
    const navigate = useNavigate();
    console.log("Club", club);
    const handleClubDelete = async (e, id) => {
        e.preventDefault();
        const requestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        };
        const response = await fetch(
            `${process.env.REACT_APP_OUR_DB_URL}clubs/${club.clubsid}`,
            requestOptions
        );
        const data = await response.json();
        console.log("DELETE DATA", data);
        navigate("/db/clubs");
    };

    return (
        // <p>from new component {club.name}</p>
        <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={club.image} />

            <Card.Body>
                <Card.Text>
                    <p>
                        <b>Club Id: </b> {club.clubsid}
                        <br />
                        <b>Club Name: </b> {club.name}
                    </p>
                    <p>
                        <b>Book Name: </b> {club.title}
                        <br />
                        <b>Book ISBN: </b> {club.isbn}
                    </p>
                    <p>
                        <b>Club Start date: </b> {club.start_date}
                        <br />
                        <b>Club End date: </b> {club.end_date}
                    </p>
                    <Button
                        variant="warning"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`/clubs/edit/${club.clubsid}`);
                        }}
                    >
                        Edit Club
                    </Button>
                    <Button
                        variant="danger"
                        onClick={(e) => {
                            handleClubDelete(e, club.clubsid);
                        }}
                    >
                        Delete Club
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
