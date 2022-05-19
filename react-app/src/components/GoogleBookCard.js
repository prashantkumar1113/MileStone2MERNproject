import React from "react";
import {Card, Button} from "react-bootstrap";

export default function GoogleBookCard({book, saleInfo, user}) {
    // console.log("Sales info", saleInfo);
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
                {saleInfo && saleInfo.buyLink && (
                    <Button href={saleInfo.buyLink} target="_blank">
                        Buy
                    </Button>
                )}
                {user.isAuthenticated && (
                    <Button variant="success">Add Book to Club</Button>
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
