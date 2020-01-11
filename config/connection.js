const mysql = require("mysql");
const express = require("express");
const exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log("Error connecting to server: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;