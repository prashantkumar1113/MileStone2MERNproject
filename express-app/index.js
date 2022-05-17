require("dotenv").config();
const express = require("express");
const app = express();
//const fetch = require("node-fetch-commonjs");
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const {
  GetBooks,
  GetClubs,
  GetRosters,
  GetUsers,
  queryToInsertBooks
} =  require("./queries.js")

///////////////////////////////////////////////////////////////////////
// Root
app.get("/", async (req, res) => {
  res.status(200).json({
      message: "Welcome to our Bookclub API",
  });
});

///////////////////////////////////////////////////////////////////////
// Books
app.get("/Books", async (req, res) => {
  const response = await GetBooks();
  res.status(200).json(response);
});

app.get("/Books/:isbn", async (req, res) => {
  const response = await GetBooks(req.params.isbn);
  res.status(200).json(response);
});

app.post("/Books", async (req, res) => {
  try {
    const response = await queryToInsertBooks(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

///////////////////////////////////////////////////////////////////////
// Clubs
app.get("/Clubs", async (req, res) => {
  const response = await GetClubs();
  res.status(200).json(response);
});

app.get("/Clubs/:id", async (req, res) => {
  const response = await GetClubs(req.params.id);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Rosters
app.get("/Rosters", async (req, res) => {
  const response = await GetRosters();
  res.status(200).json(response);
});

app.get("/Rosters/:filter", async (req, res) => {
  const response = await GetRosters(req.params.filter);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Users
app.get("/Users", async (req, res) => {
  const response = await GetUsers();
  res.status(200).json(response);
});

app.get("/Users/:email", async (req, res) => {
  const response = await GetUsers(req.params.email);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Start Listening
app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});

///////////////////////////////////////////////////////////////////////
