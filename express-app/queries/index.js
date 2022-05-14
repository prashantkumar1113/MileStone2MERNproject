const { db } = require("../dbConnection");

exports.FetchBooks = () => {
  return db.manyOrNone(
    `SELECT * FROM books`
  )
}

exports.FetchClubs = () => {
  return db.manyOrNone(
    `SELECT * FROM clubs`
  )
}

exports.FetchRosters = () => {
  return db.manyOrNone(
    `SELECT * FROM rosters`
  )
}

exports.FetchUsers = () => {
  return db.manyOrNone(
    `SELECT * FROM users`
  )
}
