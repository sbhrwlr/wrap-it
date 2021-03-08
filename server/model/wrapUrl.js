const mongoose = require("mongoose");

const wrapUrl = new mongoose.Schema({
  full: { type: String, required: true },
  wrap: { type: String },
  urlCode: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("wrapUrl", wrapUrl);
