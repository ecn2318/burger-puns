const express = require("express");
const router = express.Router();
const db = require("../config/orm").orm;


// Import the model to use database functions
//const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.all("burgers", (data) => {
        console.log(data)
        res.render("index", { burger: data });
    })
});

router.get("/about", function (req, res) {
    res.render("about");
})


module.exports = router;