import React from "react";
import {Card, Button, Badge} from "react-bootstrap";

export default function GoogleBookCard({book}) {
    // console.log("Book", book);
    return (
        <Card style={{width: "16rem"}}>
            {book.imageLinks && (
                <Card.Img variant="top" src={book.imageLinks.thumbnail} />
            )}
            <Card.Body>
                {book.title && <Card.Title>{book.title}</Card.Title>}
                {book.description && (
                    <Card.Text>
                        {book.description.substring(0, 100)}...
                    </Card.Text>
                )}
            </Card.Body>
            {book.industryIdentifiers && (
                <Card.Footer>
                    {book.industryIdentifiers[0].identifier}
                </Card.Footer>
            )}
        </Card>
    );
}
