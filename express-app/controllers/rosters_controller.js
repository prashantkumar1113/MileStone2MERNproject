const { db } = require("../dbConnection");
const express = require('express')
const rosters = express.Router()

rosters.get("/", async (req, res) => {
  const response = await queryToFetchRosters();
  res.status(200).json(response);
});

rosters.get("/:filter", async (req, res) => {
  const response = await queryToFetchRosters(req.params.filter);
  res.status(200).json(response);
});

queryToFetchRosters = (filter) => {
  var query = (filter === undefined) ? `SELECT * FROM rosters` :
              (isNaN(filter))        ? `SELECT * FROM rosters WHERE usersemail = '${filter}'` :
                                       `SELECT * FROM rosters WHERE clubsid    = '${filter}'`;
  return db.manyOrNone(
    `${query}`
  )
}

module.exports = rosters
