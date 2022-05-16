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

exports.Users = (email) => {
  var query = (email === undefined) ? `SELECT * FROM users` : `SELECT * FROM users WHERE email = '${email}'`
  return db.manyOrNone(
    `${query}`
  )
}
