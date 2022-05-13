import React from "react";
import {Card, Button, Badge} from "react-bootstrap";

export default function BookCard({book}) {
    console.log(book);
    return (
        // <div>
        //     <p>{book.title}</p>
        //     <img src={book.book_image} alt={book.title} width="150px" />
        // </div>
        <Card style={{width: "16rem"}}>
            <Card.Img variant="top" src={book.book_image} />
            <Card.Body>
                <Card.Title>
                    {book.title} <Badge bg="primary">{book.rank}</Badge>
                </Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <Button
                    href={book.amazon_product_url}
                    variant="primary"
                    target="_blank"
                >
                    Buy
                </Button>
            </Card.Body>
            <Card.Footer>{book.primary_isbn10}</Card.Footer>
        </Card>
    );
}
