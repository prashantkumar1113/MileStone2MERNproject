import React from "react";
import {Row} from "react-bootstrap";
import BookCard from "./BookCard";

//AIzaSyAvXjcBvtKyJEg06us3yjLNIKEBrFRhOP0 google key
//https://www.googleapis.com/books/v1/volumes?q=lord+of+the+rings Google Books search

export default function BooksRow({books, list}) {
    console.log("list: ", list);

    return (
        <Row className="mt-3">
            <h2>{list}</h2>
            {books.map((book, id) => (
                <BookCard book={book} key={id} />
            ))}
        </Row>
    );
}
