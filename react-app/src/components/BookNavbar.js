import React from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function BookNavbar({setList}) {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <i className="fas fa-book-reader"></i>{" "}
                    {/* <i className="fab fa-facebook"></i> */}
                    SQLDaddy Bookclub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
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
                                {" "}
                                Non Fiction
                            </Link>
                            <NavDropdown.Divider />
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
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
