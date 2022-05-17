import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import BookNavbar from "./components/BookNavbar";
import BooksRow from "./components/BooksRow";
import SearchResults from "./components/SearchResults";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {useState, useEffect} from "react";
import DisplayDb from "./components/DisplayDb";
import "./App.css";

function App() {
    // const [searchBooks, setSearchBooks] = useState([]);
    // const [search, setSearch] = useState("Hello");

    // const handleSearch = (e, term) => {
    //     e.preventDefault();
    //     setSearch(term);
    //     console.log(term);
    //     // navigate(`/search/${search}`);
    // };

    //Search useEffect
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             "https://www.googleapis.com/books/v1/volumes?q=" +
    //                 search +
    //                 "&printType=books&maxResults=20"
    //         );
    //         const resData = await response.json();
    //         // console.log(resData.results.books);

    //         if (resData.items) {
    //             // setBooks(resData.items);
    //             // console.log("Books", books);
    //             console.log("Search", search);
    //             // console.log("useEffect on search", resData.items);
    //             setSearchBooks(resData.items);
    //             // console.log("SearchBooks", searchBooks);
    //         } else {
    //             setSearchBooks("Not found");
    //         }
    //     };
    //     fetchData();
    // }, [search]);

    return (
        <Router>
            <BookNavbar />
            <Container>
                <Routes>
                    <Route path="/" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route
                        path="/bestsellers/:nytList"
                        element={<BooksRow />}
                    />
                    <Route
                        path="/search/:searchTerm"
                        element={<SearchResults />}
                    />
                    <Route path="/db/:displayField" element={<DisplayDb />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
