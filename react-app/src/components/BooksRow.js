import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import UserContext from "../context/UserContext";
import {Row} from "react-bootstrap";
import BookCard from "./BookCard";

export default function BooksRow() {
    const user = useContext(UserContext);
    const {nytList} = useParams();
    const [books, setBooks] = useState([]);

    const OL_API =
        "https://openlibrary.org/subjects/new_york_times_bestseller.json";

    //Nav dropdown useEffect
    useEffect(() => {
        document.title = `${nytList} - Bestsellers`;
        const fetchData = async () => {
            const response = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists/current/${nytList}.json?api-key=${process.env.REACT_APP_NYT_APIKEY}`
            );
            const resData = await response.json();
            if (resData.results.books) {
                setBooks(resData.results.books);
                // console.log("Books", books);
            } else {
                setBooks("Not found");
            }
        };
        fetchData();
    }, [nytList]);

    return (
        <Row className="mt-3">
            <h2>{nytList} - NYT Bestseller List</h2>
            {books.map((book, id) => (
                <BookCard book={book} key={id} user={user} />
            ))}
        </Row>
    );
}
