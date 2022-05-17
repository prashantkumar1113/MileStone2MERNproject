const { db } = require("../dbConnection");
const express = require('express');
const books = express.Router();

///////////////////////////////////////////////////////////////////////
// CRUD Routes

// Create Routes
books.post("/", async (req, res) => {
  try {
    const response = await queryToInsertBooks(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Read Routes
books.get("/", async (req, res) => {
  const response = await queryToFetchBooks();
  res.status(200).json(response);
});

books.get("/:isbn", async (req, res) => {
  const response = await queryToFetchBooks(req.params.isbn);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Queries

queryToFetchBooks = (isbn) => {
    var query = (isbn === undefined) ? `SELECT * FROM books` : `SELECT * FROM books WHERE isbn = '${isbn}'`;
    return db.manyOrNone(
      `${query}`
    );
}

queryToInsertBooks = (body) => {
  console.log(body)
  return db.one(
    `
    INSERT INTO books (isbn, title, author, description)
    VALUES ($/isbn/, $/title/, $/author/, $/description/)
    RETURNING isbn
    `,
    { ...body }
  );
}

module.exports = books
