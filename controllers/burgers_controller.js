var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render('index');
    });
});
router.put("/burgers/devour", function (req, res) {
    burger.update(req.body.id, function(result){
        console.log(result);
        res.redirect("/");
    });
});
router.post("/burgers/new", function (req, res) {
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;