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

// Update Routes
books.put("/", async (req, res) => {
  try {
    const response = await queryToUpdateBooks(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Routes
books.delete("/:isbn", async (req, res) => {
  try {
    const response = await queryToDeleteBooks(req.params.isbn);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

///////////////////////////////////////////////////////////////////////
// Queries

queryToInsertBooks = (body) => {
  //console.log(body)
  return db.one(
    `
    INSERT INTO books (isbn, title, author, description, image)
    VALUES ($/isbn/, $/title/, $/author/, $/description/, $/image/)
    RETURNING isbn
    `,
    { ...body }
  );
}

queryToFetchBooks = (isbn) => {
    if (isbn === undefined) {
      return db.manyOrNone(
        'SELECT * FROM books'
      );
    } else {
      return db.oneOrNone(
        `SELECT * FROM books WHERE isbn = '${isbn}'`
      );
    }
}

queryToUpdateBooks = (body) => {
  //console.log(body)
  return db.one(
    `
    UPDATE books SET
    title = $/title/,
    author = $/author/,
    description = $/description/,
    image = $/image/
    WHERE isbn = $/isbn/
    RETURNING isbn
    `,
    { ...body }
  );
}

queryToDeleteBooks = (isbn) => {
  //console.log(isbn)
  return db.result(
    'DELETE FROM books WHERE isbn = $1', isbn, a => a.rowCount
    );
}

module.exports = books
