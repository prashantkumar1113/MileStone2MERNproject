import React from "react";
import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import UserContext from "../context/UserContext";
import {Row} from "react-bootstrap";
import GoogleBookCard from "./GoogleBookCard";

export default function SearchResults() {
    const user = useContext(UserContext);
    console.log(user);
    const {searchTerm} = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        document.title = `Search for: ${searchTerm}`;
        const fetchData = async () => {
            const response = await fetch(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    searchTerm +
                    "&printType=books&maxResults=20"
            );
            const resData = await response.json();
            if (resData.items) {
                console.log("Search", searchTerm);
                // console.log("useEffect on search", resData.items);
                setBooks(resData.items);
            } else {
                setBooks("Not found");
            }
        };
        fetchData();
    }, [searchTerm]);
    return (
        <Row className="mt-3">
            <h2>Search for: {searchTerm}</h2>

            {books.map((book, id) => (
                <GoogleBookCard
                    book={book.volumeInfo}
                    saleInfo={book.saleInfo}
                    key={id}
                    user={user}
                />
            ))}
        </Row>
    );
}
