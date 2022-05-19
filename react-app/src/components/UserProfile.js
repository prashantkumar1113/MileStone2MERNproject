import React, {useContext} from "react";
import UserContext from "../context/UserContext";
import {Row} from "react-bootstrap";

export default function UserProfile() {
    const user = useContext(UserContext);
    return (
        <Row>
            <p>user profile</p>
            <p>username: {user.username}</p>
            <p>isAuthenticated: {user.isAuthenticated ? "true" : "false"}</p>
        </Row>
    );
}
