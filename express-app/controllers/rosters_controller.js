const { db } = require("../dbConnection");
const express = require('express')
const rosters = express.Router()

///////////////////////////////////////////////////////////////////////
// CRUD Routes

// Create Routes
rosters.post("/", async (req, res) => {
  try {
    const response = await queryToInsertRosters(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Read Routes
rosters.get("/", async (req, res) => {
  try {
    const response = await queryToFetchRosters();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

rosters.get("/:id", async (req, res) => {
  try {
    const response = await queryToFetchRosters(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Routes
rosters.put("/:id", async (req, res) => {
  try {
    const response = await queryToUpdateRosters(req.params.id, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Routes
rosters.delete("/:id", async (req, res) => {
  try {
    const response = await queryToDeleteRosters(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

///////////////////////////////////////////////////////////////////////
// Queries

queryToInsertRosters = (body) => {
  //console.log(body)
  return db.one(
    `
    INSERT INTO rosters (usersemail, clubsid)
    VALUES ($/usersemail/, $/clubsid/)
    RETURNING usersemail
    `,
    { ...body }
  );
}

queryToFetchRosters = (id) => {
  if (id === undefined) {
    return db.manyOrNone(
      'SELECT * FROM rosters'
    );
  } else {
    return db.oneOrNone(
      `SELECT * FROM rosters WHERE id = '${id}'`
    );
  }
}

queryToUpdateRosters = (id, body) => {
  //console.log(id, body)
  return db.one(
    `
    UPDATE rosters SET
    usersemail = $/usersemail/,
    clubsid = $/clubsid/
    WHERE id = ${id}
    RETURNING id
    `,
    { ...body }
  );
}

queryToDeleteRosters = (id) => {
  //console.log(id)
  return db.result(
    'DELETE FROM rosters WHERE id = $1', id, a => a.rowCount
    );
}

module.exports = rosters
