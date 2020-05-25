const express = require("express");
const router = express.Router();
const db = require("../config/orm").orm;


// Create all our routes and set up logic within those routes where required.

/*
router.get("/", async function (req, res) {
    //param: table name
    const data = await db.all("burgers");
    console.log("in await land...")
    //render to index.handlebars, { defined in handlebars: results}
    res.render("index", { burger: data });
}); */

router.get("/", function (req, res) {
    //param: table name
    db.all("burgers", (data) => {
        //console.log(data)
        //render index.handlebars, { defined in handlebars: results}
        res.render("index", { burger: data });
        //render #each "this.burger_name" column
    })
});

router.get("/about", function (req, res) {
    //render about.handlebars
    res.render("about");
})

router.post("/api/burgers", function (req, res) {
    db.create("burgers", "burger_name",
        req.body.burger_name + ' burger', function (result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log(req.body); //{ devoured: 'true' }
    console.log(req.body.devoured); //true
    console.log(condition); //id = 5

    db.update("burgers", [`devoured = ${req.body.devoured}`], condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    db.delete("burgers", condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;