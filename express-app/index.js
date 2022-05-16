require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch-commonjs");

const { FetchBooks, FetchClubs, FetchUsers, FetchRosters } =  require("./queries/index.js")

const FetchAllBooks = async  () => {
  const books = await FetchBooks()
  console.log('Books:\n', books)
}

const FetchAllClubs = async  () => {
  const clubs = await FetchClubs()
  console.log('Clubs:\n', clubs)
}

const FetchAllRosters = async  () => {
  const rosters = await FetchRosters()
  console.log('Rosters:\n', rosters)
}

const FetchAllUsers = async  () => {
  const users = await FetchUsers()
  return(users)
}

app.get("/", async (req, res) => {
  res.status(200).json({
      message: "Welcome to our Bookclub API",
  });
});

app.get("/Users", async (req, res) => {
  const response = await FetchAllUsers();
  res.status(200).json(response);
});

app.get("/Users/:email", async (req, res) => {
  console.log(req.params.email)
  const response = await FetchAllUsers();
  res.status(200).json(response);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});

// FetchAllBooks()
// FetchAllClubs()
// FetchAllRosters()
// FetchAllUsers()
