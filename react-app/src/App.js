import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import BookNavbar from "./components/BookNavbar";
import BooksRow from "./components/BooksRow";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <Router>
            <BookNavbar />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <BooksRow list="Combined-Print-and-E-Book-Fiction" />
                        }
                    />
                    <Route
                        path="/hardcover"
                        element={<BooksRow list="Hardcover-Fiction" />}
                    />
                    {/* <BooksRow title="NYT Fiction Best Sellers" /> */}
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
