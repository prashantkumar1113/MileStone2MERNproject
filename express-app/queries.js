const { db } = require("./dbConnection");

exports.GetBooks = (isbn) => {
  var query = (isbn === undefined) ? `SELECT * FROM books` : `SELECT * FROM books WHERE isbn = '${isbn}'`
  return db.manyOrNone(
    `${query}`
  )
}

exports.GetClubs = (id) => {
  var query = (id === undefined) ? `SELECT * FROM clubs` : `SELECT * FROM clubs WHERE id = '${id}'`
  return db.manyOrNone(
    `${query}`
  )
}

exports.GetRosters = (filter) => {
  var query = (filter === undefined) ? `SELECT * FROM rosters` :
              (isNaN(filter))        ? `SELECT * FROM rosters WHERE usersemail = '${filter}'` :
                                       `SELECT * FROM rosters WHERE clubsid    = '${filter}'`;
  return db.manyOrNone(
    `${query}`
  )
}

exports.GetUsers = (email) => {
  var query = (email === undefined) ? `SELECT * FROM users` : `SELECT * FROM users WHERE email = '${email}'`
  return db.manyOrNone(
    `${query}`
  )
}

exports.queryToInsertBooks = (body) => {
  console.log(body)
  return db.none(
    `INSERT 
      INTO
      books (
        isbn,
        title,
        author,
        description
      )
      VALUES (
        $/isbn/,
        $/title/,
        $/author/,
        $/description/
      )
    `,
    { ...body }
  );
}
