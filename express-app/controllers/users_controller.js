const { db } = require("../dbConnection");
const express = require('express')
const users = express.Router()

users.get("/", async (req, res) => {
  const response = await queryToFetchUsers();
  res.status(200).json(response);
});

users.get("/:email", async (req, res) => {
  const response = await queryToFetchUsers(req.params.email);
  res.status(200).json(response);
});

queryToFetchUsers = (email) => {
  var query = (email === undefined) ? `SELECT * FROM users` : `SELECT * FROM users WHERE email = '${email}'`
  return db.manyOrNone(
    `${query}`
  )
}
  
module.exports = users
