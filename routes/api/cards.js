const express = require("express");
const router = express.Router();
const cardsCtrl = require("../../controllers/cards");

router.post("/search", cardsCtrl.saveCardData);

module.exports = router;
