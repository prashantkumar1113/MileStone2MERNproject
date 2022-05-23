import React, {useContext, useEffect, useState} from "react";
import UserContext from "../context/UserContext";
import {Row, Col, Card, Image, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function UserProfile({setUser}) {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [clubs, setClubs] = useState([]);

    const OUR_DB_URL = "http://localhost:3001/bookclubs";
    document.title = `My Profile: ${user.username}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(OUR_DB_URL);
            const resData = await response.json();
            console.log("club    Data", resData);
            if (resData) {
                console.log(
                    "Filter:",
                    resData.filter((club) => club.email === user.username)
                );
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
                    <h6>{user.username}</h6>
                    <h6>
                        isAuthenticated:{" "}
                        {user.isAuthenticated ? "true" : "false"}
                    </h6>
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
                    {clubs.map((club) => (
                        <p>{club.name}</p>
                    ))}
                </Card>
            </Col>
        </Row>
    );
}
