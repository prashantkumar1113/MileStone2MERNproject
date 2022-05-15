import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import BookNavbar from "./components/BookNavbar";
import BooksRow from "./components/BooksRow";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";

// import logo from "./logo.svg";
import "./App.css";

function App() {
    // console.log(process.env.REACT_APP_NYT_APIKEY);
    const [list, setList] = useState("Combined-Print-and-E-Book-Fiction");
    const [books, setBooks] = useState([]);

    const NYTAPI_URI = `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=`;

    const OL_API =
        "https://openlibrary.org/subjects/new_york_times_bestseller.json";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                NYTAPI_URI + process.env.REACT_APP_NYT_APIKEY
            );
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
    }, [list]);

    return (
        <Router>
            <BookNavbar setList={setList} />
            <Container>
                <Routes>
                    <Route path="/" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route
                        path="/list"
                        element={<BooksRow books={books} list={list} />}
                    />
                    <Route
                        path="/fiction"
                        element={
                            <BooksRow list="Combined-Print-and-E-Book-Fiction" />
                        }
                    />

                    {/* <BooksRow title="NYT Fiction Best Sellers" /> */}
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
