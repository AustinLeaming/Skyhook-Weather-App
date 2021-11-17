const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  // i need put the info for the card that gets populated from the api info
});

module.exports = mongoose.model("Post", postSchema);
