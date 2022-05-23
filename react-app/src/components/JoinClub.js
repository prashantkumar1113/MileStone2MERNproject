import React, {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";
import {Row, Card, Button} from "react-bootstrap";

export default function JoinClub() {
    const navigate = useNavigate();
    const [clubs, setClubs] = useState([]);
    const user = useContext(UserContext);

    document.title = "Join a Club";

    const joinAClub = async (e, clubId) => {
        console.log("Join " + clubId);
        e.preventDefault();
        const requestOptions = {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                usersemail: user.username,
                clubsid: clubId,
            }),
        };
        const response = await fetch(
            `${process.env.REACT_APP_OUR_DB_URL}rosters/`,
            requestOptions
        );
        const data = await response.json();
        console.log("Post DATA", data);
        navigate("/db/rosters");
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                process.env.REACT_APP_OUR_DB_URL + "clubs"
            );
            const resData = await response.json();
            // console.log("Clubs Data", resData);
            if (resData) {
                // console.log(
                //     "Filter:",
                //     resData.filter((club) => club.email === user.username)
                // );
                setClubs(resData);
            } else {
                setClubs("Not found");
            }
        };
        fetchData();
    }, []);

    return (
        <Row className="mt-3">
            <h2>Join a Club</h2>
            {clubs.map((club) => (
                <Card style={{width: "16rem"}}>
                    <Card.Body>
                        <Card.Text>{club.name}</Card.Text>
                    </Card.Body>
                    <Button
                        onClick={(e) => {
                            joinAClub(e, club.id);
                        }}
                    >
                        Join
                    </Button>
                </Card>
            ))}
        </Row>
    );
}
