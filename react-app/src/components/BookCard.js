import React from "react";
import {useNavigate} from "react-router-dom";
import {Card, Button, Badge} from "react-bootstrap";
import {useBootstrapBreakpoints} from "react-bootstrap/esm/ThemeProvider";

export default function BookCard({book, user}) {
    const navigate = useNavigate();
    const addBookToDb = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                isbn: book.primary_isbn13,
                title: book.title,
                author: book.author,
                description: book.description,
                image: book.book_image,
            }),
        };
        const response = await fetch(
            `${process.env.REACT_APP_OUR_DB_URL}books/`,
            requestOptions
        );
        const data = await response.json();
        console.log("ADD BOOK", data);
        navigate("/db/books");
    };

    return (
        <Card style={{width: "16rem"}}>
            <Card.Img variant="top" src={book.book_image} />
            <Card.Body>
                <Card.Title>
                    {book.title} <Badge bg="primary">{book.rank}</Badge>
                </Card.Title>
                <Card.Text>{book.author}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
                <Button
                    href={book.amazon_product_url}
                    variant="primary"
                    target="_blank"
                >
                    Buy
                </Button>

                {user.isAuthenticated && (
                    <>
                        <Button variant="success" onClick={addBookToDb}>
                            Add Book to DB
                        </Button>
                        <Button variant="success">Add to Book Club</Button>
                    </>
                )}
            </Card.Body>
            <Card.Footer>{book.primary_isbn10}</Card.Footer>
        </Card>
    );
}
