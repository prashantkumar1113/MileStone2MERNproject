const { db } = require("./dbConnection");

exports.Books = (isbn) => {
  var query = (isbn === undefined) ? `SELECT * FROM books` : `SELECT * FROM books WHERE isbn = '${isbn}'`
  return db.manyOrNone(
    `${query}`
  )
}

exports.Clubs = (id) => {
  var query = (id === undefined) ? `SELECT * FROM clubs` : `SELECT * FROM clubs WHERE id = '${id}'`
  return db.manyOrNone(
    `${query}`
  )
}

exports.Rosters = (filter) => {
  var query = (filter === undefined) ? `SELECT * FROM rosters` :
              (isNaN(filter))        ? `SELECT * FROM rosters WHERE usersemail = '${filter}'` :
                                       `SELECT * FROM rosters WHERE clubsid    = '${filter}'`;
  console.log(filter.match("@"))
  return db.manyOrNone(
    `${query}`
  )
}

exports.Users = (email) => {
  var query = (email === undefined) ? `SELECT * FROM users` : `SELECT * FROM users WHERE email = '${email}'`
  return db.manyOrNone(
    `${query}`
  )
}
