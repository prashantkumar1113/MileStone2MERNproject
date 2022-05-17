import {Row} from "react-bootstrap";
import GoogleBookCard from "./GoogleBookCard";

export default function SearchResults({books, searchTerm}) {
    console.log("IN search results", books);
    return (
        <Row className="mt-3">
            <h2>Search for: {searchTerm}</h2>

            {books.map((book, id) => (
                <GoogleBookCard book={book.volumeInfo} />
            ))}
            {/* <p>{books[0].volumeInfo.title}</p>
            <p>{books[0].volumeInfo.description}</p> */}
        </Row>
    );
}
