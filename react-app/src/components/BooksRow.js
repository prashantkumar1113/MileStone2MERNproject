import React from "react";
import {useState, useEffect} from "react";
import {Row} from "react-bootstrap";

export default function BooksRow({title}) {
    let [books, setBooks] = useState([]);

    return (
        <Row>
            <h2>{title}</h2>
        </Row>
    );
}
