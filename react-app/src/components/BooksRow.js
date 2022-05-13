import React from "react";
import {useState, useEffect} from "react";
import {Row} from "react-bootstrap";
import BookCard from "./BookCard";

//AIzaSyAvXjcBvtKyJEg06us3yjLNIKEBrFRhOP0 google key
//https://www.googleapis.com/books/v1/volumes?q=lord+of+the+rings Google Books search

export default function BooksRow({title}) {
    let [books, setBooks] = useState([]);
    const NYTAPI_URI =
        "https://api.nytimes.com/svc/books/v3/lists/current/Combined-Print-and-E-Book-Fiction.json?api-key=";
    const NYTAPI_KEY = "uQDQg09ZyozMNpN7BwGMUcp4AUVDjG2x";

    const OL_API =
        "https://openlibrary.org/subjects/new_york_times_bestseller.json";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(NYTAPI_URI + NYTAPI_KEY);
            // const response = await fetch(OL_API);
            //console.log("RES", response);
            const resData = await response.json();
            // console.log(resData.results.books);

            if (resData.results.books) {
                setBooks(resData.results.books);
                console.log("Books", books);
            } else {
                setBooks("Not found");
            }
        };
        fetchData();
    }, []);

    // const renderBookCards = books.map((book, index) => {
    //     return <BookCard book={book} />;
    // });

    return (
        <Row className="mt-3">
            <h2>{title}</h2>
            {books.map((book, id) => (
                // <>
                //     <p>{book.title}</p>
                //     <img src={book.book_image} width="50px" alt={book.title} />
                // </>
                <BookCard book={book} key={id} />
            ))}
        </Row>
    );
}
