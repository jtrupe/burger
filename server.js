const express = require("express");
const exphbs = require("express-handlebars");


var app = express();

app.use(express.static(__dirname + "/public"));

// app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes); 

var PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});