require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch-commonjs");

const { Books, Clubs, Rosters, Users } =  require("./queries.js")

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
  const response = await Books();
  res.status(200).json(response);
});

app.get("/Books/:isbn", async (req, res) => {
  const response = await Books(req.params.isbn);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Clubs
app.get("/Clubs", async (req, res) => {
  const response = await Clubs();
  res.status(200).json(response);
});

app.get("/Clubs/:id", async (req, res) => {
  const response = await Clubs(req.params.id);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Rosters
app.get("/Rosters", async (req, res) => {
  const response = await Rosters();
  res.status(200).json(response);
});

app.get("/Rosters/:filter", async (req, res) => {
  const response = await Rosters(req.params.filter);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Users
app.get("/Users", async (req, res) => {
  const response = await Users();
  res.status(200).json(response);
});

app.get("/Users/:email", async (req, res) => {
  const response = await Users(req.params.email);
  res.status(200).json(response);
});

///////////////////////////////////////////////////////////////////////
// Start Listening
app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});

///////////////////////////////////////////////////////////////////////
