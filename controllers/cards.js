const Card = require("../models/card");

module.exports = {
  saveCardData,
};

async function saveCardData(req, res) {
  console.log(req.body, "<-- req.body");
  // const card = new Card(req.body);
  // card.user = req.user._id
  // card.save(function(err) {
  //     if (err) return (navigate("/"))
  // })
}
