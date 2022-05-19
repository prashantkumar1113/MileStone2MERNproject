import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserContext from "./context/UserContext";
import {Container} from "react-bootstrap";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import BookNavbar from "./components/BookNavbar";
import BooksRow from "./components/BooksRow";
import SearchResults from "./components/SearchResults";
import DisplayDb from "./components/DisplayDb";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
    const [user, setUser] = useState({username: "", isAuthenticated: false});
    console.log("from app.js", user);
    return (
        <Router>
            <UserContext.Provider value={user}>
                <BookNavbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<RegisterForm />} />
                        <Route
                            path="/login"
                            element={<LoginForm setUser={setUser} />}
                        />
                        <Route
                            path="/bestsellers/:nytList"
                            element={<BooksRow />}
                        />
                        <Route
                            path="/search/:searchTerm"
                            element={<SearchResults />}
                        />
                        <Route
                            path="/db/:displayField"
                            element={<DisplayDb />}
                        />
                        <Route path="/userprofile" element={<UserProfile />} />
                    </Routes>
                </Container>
            </UserContext.Provider>
        </Router>
    );
}

export default App;
