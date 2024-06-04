const express = require("express");

const app = express();
const port = 5000;
const mysql = require("mysql2");
const config = require("./config/config")
let connection = mysql.createConnection(config.db);

connection.connect(function(err){
    if(err){
        return console.log(err);
    }
    console.log("Connected to MySQL");
})

app.get("/", (req,res)=> res.send("Hello Noroff Backend!"));

app.listen(port, ()=> {
    console.log(`Example listening on port ${port}`);
});