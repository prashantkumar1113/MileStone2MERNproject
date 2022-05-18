const { db } = require("../dbConnection");
const express = require('express')
const clubs = express.Router()

///////////////////////////////////////////////////////////////////////
// CRUD Routes

// Create Routes
clubs.post("/", async (req, res) => {
  try {
    const response = await queryToInsertClubs(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Read Routes
clubs.get("/", async (req, res) => {
  const response = await queryToFetchClubs();
  res.status(200).json(response);
});

clubs.get("/:id", async (req, res) => {
  const response = await queryToFetchClubs(req.params.id);
  res.status(200).json(response);
});

// Update Routes
clubs.put("/:id", async (req, res) => {
  try {
    const response = await queryToUpdateClubs(req.params.id, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Routes
clubs.delete("/:id", async (req, res) => {
  try {
    const response = await queryToDeleteClubs(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

///////////////////////////////////////////////////////////////////////
// Queries

queryToInsertClubs = (body) => {
  //console.log(body)
  return db.one(
    `
    INSERT INTO clubs (name, start_date, end_date, booksisbn)
    VALUES ($/name/, $/start_date/, $/end_date/, $/booksisbn/)
    RETURNING name
    `,
    { ...body }
  );
}

queryToFetchClubs = (id) => {
  if (id === undefined) {
    return db.manyOrNone(
      'SELECT * FROM clubs'
    );
  } else {
    return db.oneOrNone(
      `SELECT * FROM clubs WHERE id = '${id}'`
    );
  }
}

queryToUpdateClubs = (id, body) => {
  //console.log(id, body)
  return db.one(
    `
    UPDATE clubs SET
    name = $/name/,
    start_date = $/start_date/,
    end_date = $/end_date/,
    booksisbn = $/booksisbn/
    WHERE id = ${id}
    RETURNING id
    `,
    { ...body }
  );
}

queryToDeleteClubs = (id) => {
  //console.log(id)
  return db.result(
    'DELETE FROM clubs WHERE id = $1', id, a => a.rowCount
    );
}

module.exports = clubs
