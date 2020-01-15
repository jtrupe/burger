var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render('index');
    })
})

module.exports = router;