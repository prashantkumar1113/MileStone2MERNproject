import React, {useContext, useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import BookCard from "./BookCard"
import GoogleBookCard from "./GoogleBookCard"
import DisplayDb from "./DisplayDb"
import { Row } from "react-bootstrap"
import UserContext from "../context/UserContext"

export default function BookClubProfile() {
    const user = useContext(UserContext)
    const {userInfo} = useParams()
    const username = user.username
    const [club, setClub] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        document.title = `Dbdata - /Users/:email`;
        const OUR_DB_URL = `http://localhost:3001/bookclubs/users/${username}`;
        const fetchData = async () => {
            const response = await fetch(OUR_DB_URL);
            const resData = await response.json();
            console.log("RES Data", resData);
            // console.log("userinfo", userInfo)
            setClub(resData) 
            
            for (let i = 0; i < resData.length; i++) {
                const bookClubs = resData[i];
                setBooks({bookNumber: bookClubs.isbn}
                    );
                // console.log("Keys", dbKeys);
            }
            console.log(club.books)
        } 
        
        fetchData();
    }, [books, username]);

    
    
 console.log(username)
    return(
    <Row>
       {/*I want to put a book card of a book clubs book here */}
       {club}
       {books.map((book) => (
                <BookCard
                    book={book.primary_isbn10}
                    user={username}
                />
       
            ))
       };
       
        <Link className="nav-link" to="/bestsellers/Combined-Print-and-E-Book-Fiction">
                            Change Book
         </Link> 
         
         <DisplayDb /> 
    </Row>

    )
}  

