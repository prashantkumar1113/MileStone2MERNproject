const { db } = require("../dbConnection");
const express = require('express')
const clubs = express.Router()

clubs.get("/", async (req, res) => {
  const response = await queryToFetchClubs();
  res.status(200).json(response);
});

clubs.get("/:id", async (req, res) => {
  const response = await queryToFetchClubs(req.params.id);
  res.status(200).json(response);
});

queryToFetchClubs = (id) => {
  var query = (id === undefined) ? `SELECT * FROM clubs` : `SELECT * FROM clubs WHERE id = '${id}'`
  return db.manyOrNone(
    `${query}`
  )
}

module.exports = clubs
