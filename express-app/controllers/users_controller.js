const { db } = require("../dbConnection");
const express = require('express')
const users = express.Router()

///////////////////////////////////////////////////////////////////////
// CRUD Routes

// Create Routes
users.post("/", async (req, res) => {
  try {
    const response = await queryToInsertUsers(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Read Routes
users.get("/", async (req, res) => {
  const response = await queryToFetchUsers();
  res.status(200).json(response);
});

users.get("/:email", async (req, res) => {
  const response = await queryToFetchUsers(req.params.email);
  res.status(200).json(response);
});

// Update Routes
users.put("/", async (req, res) => {
  try {
    const response = await queryToUpdateUsers(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Routes
users.delete("/:email", async (req, res) => {
  try {
    const response = await queryToDeleteUsers(req.params.email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

///////////////////////////////////////////////////////////////////////
// Queries

queryToInsertUsers = (body) => {
  //console.log(body)
  return db.one(
    `
    INSERT INTO users (email, firstname, lastname, birthdate)
    VALUES ($/email/, $/firstname/, $/lastname/, $/birthdate/)
    RETURNING email
    `,
    { ...body }
  );
}

queryToFetchUsers = (email) => {
  if (email === undefined) {
    return db.manyOrNone(
      'SELECT * FROM users'
    );
  } else {
    return db.oneOrNone(
      `SELECT * FROM users WHERE email = '${email}'`
    );
  }
}

queryToUpdateUsers = (body) => {
  //console.log(body)
  return db.one(
    `
    UPDATE users SET
    firstname = $/firstname/,
    lastname = $/lastname/,
    birthdate = $/birthdate/
    WHERE email = $/email/
    RETURNING email
    `,
    { ...body }
  );
}

queryToDeleteUsers = (email) => {
  //console.log(email)
  return db.result(
    'DELETE FROM users WHERE email = $1', email, a => a.rowCount
    );
}

module.exports = users
