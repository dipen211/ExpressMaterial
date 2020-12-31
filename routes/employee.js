var express = require("express");
const employees = require('../server/data/db.json')
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json(employees);
});

module.exports = router;