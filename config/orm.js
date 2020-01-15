const connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, value, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES (" + "value" + ");";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, val, cb) {
        var queryString = "UPDATE " + table + " SET devoured=true WHERE id=" + val + ";";
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;