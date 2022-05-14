import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import BookNavbar from "./components/BookNavbar";
import BooksRow from "./components/BooksRow";
// import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* 
        Navbar
        Main (bookcards)
        Footer
      */}
            <BookNavbar />
            <Container>
                <BooksRow title="NYT Fiction Best Sellers" />
            </Container>
        </div>
    );
}

export default App;
