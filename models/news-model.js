const { Schema, model } = require("mongoose");

const NewsSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, reuired: true },
  picture: { type: String },
});

module.exports = model("News", NewsSchema);
