var express = require("express");
var router = express.Router();

const { findAll, findOne, create, update, delete: remove } = require("../controllers/user");
const authorization = require("../authorization");

/* GET users listing. */
router.get("/", authorization, findAll);
router.get("/:id", authorization, findOne);
router.post("/", authorization, create);
router.delete("/:id", authorization, remove);
router.put("/:id", authorization, update);

module.exports = router;
