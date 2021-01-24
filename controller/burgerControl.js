const express = require("express")

const router = express.Router();

const burger = require("../models/burgers.js")

//creating route-switchboard to forward CRUD and navigation

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res){
    burger.create([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function(result) {
        res.json({ id: result.insertId });
    });
});
//updating a specific burger (and by that I mean eating it.)
router.put("/api/burger/:id", function(req, res) {
    const condition = "id = " +req.params.id;

    console.log("condition ", condition);

    burger.update({
        eaten: req.body.eaten
    }, condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res) {
        const condition = "id " + req.params.id;

        console.log("condition " , condition);
    
    burger.delete(condition, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
