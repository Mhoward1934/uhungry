const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  ingredient: String,
  inputItem: String,
  username: { type: String, required: true },
});

const Food = mongoose.model("Food", bookSchema);

module.exports = Food;
