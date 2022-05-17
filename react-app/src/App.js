import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import BookNavbar from "./components/BookNavbar";
import BooksRow from "./components/BooksRow";
import SearchResults from "./components/SearchResults";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import "./App.css";

function App() {
    const [list, setList] = useState("Combined-Print-and-E-Book-Fiction");
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [search, setSearch] = useState("Hello");

    const NYTAPI_URI = `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=`;

    const OL_API =
        "https://openlibrary.org/subjects/new_york_times_bestseller.json";

    //Nav dropdown useEffect
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                NYTAPI_URI + process.env.REACT_APP_NYT_APIKEY
            );
            // const response = await fetch(OL_API);
            //console.log("RES", response);
            const resData = await response.json();
            if (resData.results.books) {
                setBooks(resData.results.books);
                console.log("Books", books);
            } else {
                setBooks("Not found");
            }
        };
        fetchData();
    }, [list]);

    const handleSearch = (e, term) => {
        e.preventDefault();
        setSearch(term);
        console.log(term);
        // navigate(`/search/${search}`);
    };

    //Search useEffect
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    search +
                    "&printType=books&maxResults=20"
            );
            const resData = await response.json();
            // console.log(resData.results.books);

            if (resData.items) {
                // setBooks(resData.items);
                // console.log("Books", books);
                console.log("Search", search);
                // console.log("useEffect on search", resData.items);
                setSearchBooks(resData.items);
                console.log("SearchBooks", searchBooks);
            } else {
                setSearchBooks("Not found");
            }
        };
        fetchData();
    }, [search]);

    return (
        <Router>
            <BookNavbar setList={setList} handleSearch={handleSearch} />
            <Container>
                <Routes>
                    <Route path="/" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route
                        path="/list/"
                        element={<BooksRow books={books} list={list} />}
                    />
                    <Route
                        path="/search"
                        element={
                            <SearchResults
                                books={searchBooks}
                                searchTerm={search}
                            />
                        }
                    />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
