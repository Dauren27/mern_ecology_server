const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, reuired: true },
  time: { type: String, reuired: true },
  address: { type: String, required: true },
  picture: { type: String },
});

module.exports = model("Event", EventSchema);
