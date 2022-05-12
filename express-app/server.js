// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch-commonjs");

// ROOT
app.get("/", async (req, res) => {
    const response = await fetch(
        "https://openlibrary.org/authors/OL34184A.json"
    );
    const data = await response.json();

    res.status(200).json({
        message: "Welcome to our Bookclub API",
        data: data,
    });
});

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`);
});
