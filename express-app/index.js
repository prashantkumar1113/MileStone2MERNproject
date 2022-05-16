require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch-commonjs");

const { FetchBooks, FetchClubs, Users, FetchRosters } =  require("./queries/index.js")

app.get("/", async (req, res) => {
  res.status(200).json({
      message: "Welcome to our Bookclub API",
  });
});

app.get("/Users", async (req, res) => {
  const response = await Users();
  res.status(200).json(response);
});

app.get("/Users/:email", async (req, res) => {
  const response = await Users(req.params.email);
  res.status(200).json(response);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
