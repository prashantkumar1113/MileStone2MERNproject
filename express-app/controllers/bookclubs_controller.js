const { db } = require("../dbConnection");
const express = require('express');
const bookclubs = express.Router();

///////////////////////////////////////////////////////////////////////
// CRUD Routes

// Read Routes

bookclubs.get("/", async (req, res) => {
  const response = await queryToFetchBookClubs(baseQuery);
  res.status(200).json(response);
});
  
bookclubs.get("/Books/:isbn", async (req, res) => {
  var query = `${baseQuery} WHERE (books.isbn = '${req.params.isbn}')`
  const response = await queryToFetchBookClubs(query);
  res.status(200).json(response);
});

bookclubs.get("/Clubs/:id", async (req, res) => {
  var query = `${baseQuery} WHERE (clubs.id = '${req.params.id}')`
  const response = await queryToFetchBookClubs(query);
  res.status(200).json(response);
});

bookclubs.get("/Rosters/:id", async (req, res) => {
  var query = `${baseQuery} WHERE (rosters.ID = '${req.params.id}')`
  const response = await queryToFetchBookClubs(query);
  res.status(200).json(response);
});

bookclubs.get("/Users/:email", async (req, res) => {
  var query = `${baseQuery} WHERE (users.Email = '${req.params.email}')`
  const response = await queryToFetchBookClubs(query);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Queries

const baseQuery = `
SELECT clubs.ID AS clubsid, clubs.name, clubs.start_date, clubs.end_date,
books.*, rosters.ID AS rosterid, users.* FROM rosters
INNER JOIN users ON rosters.usersEmail = users.email
INNER JOIN clubs ON rosters.clubsid = clubs.id
INNER JOIN books ON clubs.booksisbn = books.isbn
`

queryToFetchBookClubs = (query) => {
  return db.manyOrNone(
    `${query}`
  );
}

module.exports = bookclubs
