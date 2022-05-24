import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";
import {Row, Col, Card, Image, Button} from "react-bootstrap";
import BookClubCard from "./BookClubCard";

export default function UserProfile({setUser}) {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [clubs, setClubs] = useState([]);

    // const OUR_DB_URL = "http://localhost:3001/bookclubs";
    document.title = `My Profile: ${user.username}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                process.env.REACT_APP_OUR_DB_URL + "bookclubs"
            );
            const resData = await response.json();
            // console.log("Clubs Data", resData);
            if (resData) {
                // console.log(
                //     "Filter:",
                //     resData.filter((club) => club.email === user.username)
                // );
                setClubs(
                    resData.filter((club) => club.email === user.username)
                );
            } else {
                setClubs("Not found");
            }
        };
        fetchData();
    }, []);
    return (
        <Row className="mt-3">
            <Col md={3}>
                <h2>My Profile</h2>
                <Card>
                    <Image
                        roundedCircle={true}
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    />
                    <Card.Body>
                        <Card.Text>
                            <h6>{user.username}</h6>
                            <h6>
                                isAuthenticated:{" "}
                                {user.isAuthenticated ? "true" : "false"}
                            </h6>
                        </Card.Text>
                    </Card.Body>
                    <Button
                        variant="dark"
                        onClick={(e) => {
                            e.preventDefault();
                            setUser({username: "", isAuthenticated: false});
                            navigate("/");
                        }}
                    >
                        Logout
                    </Button>
                </Card>
            </Col>
            <Col md={9}>
                <h2>My Clubs</h2>{" "}
                <Card>
                    <Card.Body>
                        <Row>
                            {clubs.length > 0 ? (
                                clubs.map((club) => (
                                    <BookClubCard
                                        club={club}
                                        username={user.username}
                                    />
                                ))
                            ) : (
                                <Card.Text>
                                    <p>None</p>
                                </Card.Text>
                            )}
                        </Row>
                        <Button variant="success">Add a Bookclub</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
