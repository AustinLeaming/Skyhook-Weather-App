const express = require("express");
const router = express.Router();
const cardsCtrl = require("../../controllers/cards");

router.post("/", cardsCtrl.saveCardData);
router.get("/", cardsCtrl.index);

module.exports = router;
