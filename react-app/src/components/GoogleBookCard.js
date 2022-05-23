import React from "react";
import {useNavigate} from "react-router-dom";
import {Card, Button} from "react-bootstrap";

export default function GoogleBookCard({book, saleInfo, user}) {
    // console.log("Sales info", saleInfo);
    // console.log("book info", book);
    const navigate = useNavigate();
    const addBookToDb = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                isbn: book.industryIdentifiers[0].identifier,
                title: book.title,
                author: book.authors,
                description: book.description.substring(0, 50),
                image: book.imageLinks.thumbnail,
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
            {book.imageLinks && (
                <Card.Img variant="top" src={book.imageLinks.thumbnail} />
            )}
            <Card.Body>
                {book.title && <Card.Title>{book.title}</Card.Title>}
                {book.authors && <Card.Text>{book.authors}</Card.Text>}
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
                {user.isAuthenticated && book.industryIdentifiers && (
                    <>
                        <Button variant="success" onClick={addBookToDb}>
                            Add Book to DB
                        </Button>
                        <Button variant="success">Add Book to Club</Button>
                    </>
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
