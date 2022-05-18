const { db } = require("../dbConnection");
const express = require('express');
const bookclubs = express.Router();

///////////////////////////////////////////////////////////////////////
// CRUD Routes

// Read Routes

bookclubs.get("/", async (req, res) => {
  const response = await queryToFetchBookClubs();
  res.status(200).json(response);
});
  
///////////////////////////////////////////////////////////////////////
// Queries

const query = `
SELECT clubs.ID AS clubsid, clubs.name, clubs.start_date, clubs.end_date,
books.*, rosters.ID AS rosterid, users.* FROM rosters
INNER JOIN users ON rosters.usersEmail = users.email
INNER JOIN clubs ON rosters.clubsid = clubs.id
INNER JOIN books ON clubs.booksisbn = books.isbn
`

queryToFetchBookClubs = (isbn) => {
  return db.manyOrNone(
    `${query}`
  );
}

module.exports = bookclubs
