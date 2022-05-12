// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();

// ROOT
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to our Bookclub API",
    });
});

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`);
});
