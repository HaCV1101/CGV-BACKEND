const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchemaNow = new Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  timeStart: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movie", MovieSchemaNow);
