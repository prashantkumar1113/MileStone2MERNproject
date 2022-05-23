import React, {useState, useContext} from "react";
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
import UserContext from "../context/UserContext";

export default function BookNavbar({handleSearch}) {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const user = useContext(UserContext);
    // console.log(user);

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                {user.isAuthenticated ? (
                    <Link to="/userprofile" className="navbar-brand">
                        <i className="fas fa-book-reader"></i> SQLDaddy Bookclub
                    </Link>
                ) : (
                    <Link to="/" className="navbar-brand">
                        <i className="fas fa-book-reader"></i> SQLDaddy Bookclub
                    </Link>
                )}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        {user.isAuthenticated ? (
                            <Link className="nav-link" to="/userprofile">
                                {user.username}
                            </Link>
                        ) : (
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        )}
                        {user.isAuthenticated && (
                            <Link className="nav-link" to="/clubs/join">
                                Join a Club
                            </Link>
                        )}
                        <NavDropdown
                            title="Bestseller Lists"
                            id="basic-nav-dropdown"
                        >
                            {/* <Link className="dropdown-item" to="/fiction"> */}
                            <Link
                                to="/bestsellers/Combined-Print-and-E-Book-Fiction"
                                className="dropdown-item"
                            >
                                Fiction
                            </Link>
                            <Link
                                to="/bestsellers/Combined-Print-and-E-Book-Nonfiction"
                                className="dropdown-item"
                            >
                                Non Fiction
                            </Link>
                            <Link
                                to="/bestsellers/Young-Adult"
                                className="dropdown-item"
                            >
                                Young Adult
                            </Link>
                            <Link
                                to="/bestsellers/Childrens-Middle-Grade"
                                className="dropdown-item"
                            >
                                Childrens Books
                            </Link>
                            <NavDropdown.Divider />
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Business-Books"
                            >
                                Business Books
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Celebrities"
                            >
                                Celebrities
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Culture"
                            >
                                Culture
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Education"
                            >
                                Education
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Health"
                            >
                                Health
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Humor"
                            >
                                Humor
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Science"
                            >
                                Science
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Sports"
                            >
                                Sports
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Travel"
                            >
                                Travel
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Graphic-Books-and-Manga"
                            >
                                Graphic Books and Manga
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/bestsellers/Advice-How-To-and-Miscellaneous"
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
                            <Link to="/db/bookclubs" className="dropdown-item">
                                Bookclubs
                            </Link>
                        </NavDropdown>
                    </Nav>
                    <Form
                        className="d-flex"
                        onSubmit={(e) => {
                            //handleSearch(e, searchTerm);
                            e.preventDefault();
                            navigate(`/search/${searchTerm}`);
                        }}
                    >
                        <FormControl
                            type="search"
                            placeholder="Search Books"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                // console.log(e.target.value);
                            }}
                        />
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
