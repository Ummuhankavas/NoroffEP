const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require("mysql2");
const config = require("./config/config");

let connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
});

connection.connect(function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Connected to MySQL");
});

app.get("/", (req, res) => res.send("Hello Noroff Backend!"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
