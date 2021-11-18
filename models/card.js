const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  location: String,
});

module.exports = mongoose.model("Card", cardSchema);
