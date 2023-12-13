const createNode = require("./components/create-node");
const getNodes = require("./components/get-node")

const router = require("express").Router();

router.post("/node/create", createNode);
router.get("/node/get", getNodes)

module.exports = router;