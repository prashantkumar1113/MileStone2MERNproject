import React, {useState} from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

export default function BookNavbar({setList, handleSearch}) {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <i className="fas fa-book-reader"></i> SQLDaddy Bookclub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                        <NavDropdown
                            title="Bestseller Lists"
                            id="basic-nav-dropdown"
                        >
                            {/* <Link className="dropdown-item" to="/fiction"> */}
                            <Link
                                to="/list"
                                className="dropdown-item"
                                onClick={() => {
                                    setList(
                                        "Combined-Print-and-E-Book-Fiction"
                                    );
                                }}
                            >
                                Fiction
                            </Link>
                            <Link
                                to="/list"
                                className="dropdown-item"
                                onClick={() => {
                                    setList(
                                        "Combined-Print-and-E-Book-Nonfiction"
                                    );
                                }}
                            >
                                Non Fiction
                            </Link>
                            <Link
                                to="/list"
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Young-Adult");
                                }}
                            >
                                Young Adult
                            </Link>
                            <Link
                                to="/list"
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Childrens-Middle-Grade");
                                }}
                            >
                                Childrens Books
                            </Link>
                            <NavDropdown.Divider />
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Business-Books");
                                }}
                                to="/list"
                            >
                                Business Books
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Celebrities");
                                }}
                                to="/list"
                            >
                                Celebrities
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Culture");
                                }}
                                to="/list"
                            >
                                Culture
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Education");
                                }}
                                to="/list"
                            >
                                Education
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Health");
                                }}
                                to="/list"
                            >
                                Health
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Humor");
                                }}
                                to="/list"
                            >
                                Humor
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Science");
                                }}
                                to="/list"
                            >
                                Science
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Sports");
                                }}
                                to="/list"
                            >
                                Sports
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Travel");
                                }}
                                to="/list"
                            >
                                Travel
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Graphic-Books-and-Manga");
                                }}
                                to="/list"
                            >
                                Graphic Books and Manga
                            </Link>
                            <Link
                                className="dropdown-item"
                                onClick={() => {
                                    setList("Advice-How-To-and-Miscellaneous");
                                }}
                                to="/list"
                            >
                                Advice How-To and Miscellaneous
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Db Data" id="basic-nav-dropdown">
                            <Link to="/db/users" className="dropdown-item">
                                Users
                            </Link>
                            <Link to="/db/books" className="dropdown-item">
                                Books
                            </Link>
                            <Link to="/db/clubs" className="dropdown-item">
                                Clubs
                            </Link>
                            <NavDropdown.Divider />
                            <Link to="/db/rosters" className="dropdown-item">
                                Rosters
                            </Link>
                        </NavDropdown>
                    </Nav>
                    <Form
                        className="d-flex"
                        onSubmit={(e) => {
                            handleSearch(e, searchTerm);
                            // navigate(`/search/${searchTerm}`);
                            navigate("/search");
                        }}
                    >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                // console.log(e.target.value);
                            }}
                        />
                        <Button variant="outline-primary" type="submit">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
