const mongoose = require("mongoose");

const GardenSchema = new mongoose.Schema({
  title: String,
  description: String,
  size: String,
  postcode: String,
  gardenType: String,
});

const Garden = mongoose.model("Garden", GardenSchema);

module.exports = Garden;