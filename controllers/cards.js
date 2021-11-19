const Card = require("../models/card");

module.exports = {
  saveCardData,
  index,
};

async function saveCardData(req, res) {
  console.log(req.body.city, "<-- req.body.city");
  try {
    const card = await Card.create({
      location: req.body.city,
      user: req.user,
    });
    res.status(201).json({ card: card });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function index(req, res) {
  console.log(req, "req in card controller");
  try {
    const cards = await Card.find({ user: req.user._id })
      .populate("user")
      .exec();
    res.status(200).json({ cards: cards });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
}
