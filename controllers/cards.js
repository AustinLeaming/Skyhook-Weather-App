const Card = require("../models/card");

module.exports = {
  saveCardData,
  index,
  removeCardData,
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
  try {
    const cards = await Card.find({ user: req.user._id })
      .populate("user")
      .exec();
    console.log(cards, "cards in index function");
    res.status(200).json({ cards: cards });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
}

async function removeCardData(req, res) {
  console.log(req.params.id, "--- req.params.id");

  try {
    Card.findByIdAndDelete(req.params.id, function (err, card) {
      if (err) {
        console.log(err);
      } else {
        console.log(card);
      }
    });

    // const card = await Card.findOne({ "card._id": req.params.id });
    // console.log(card, "--- removed");
    // card.remove(req.params.id);
    // await card.save();
    // res.json({ data: "card removed" });
    // console.log("remove card data controller hit");
  } catch (err) {
    res.status(400).json({ err });
  }
}
