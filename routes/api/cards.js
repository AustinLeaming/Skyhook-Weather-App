const express = require("express");
const router = express.Router();
const cardsCtrl = require("../../controllers/cards");

router.post("/", cardsCtrl.saveCardData);

module.exports = router;
