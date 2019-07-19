const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const authorSchema = new Schema({
  firstName: String,
  lastName: String,
  nationality: String,
  birthday: Date,
  pictureUrl: String
});

const Author = mongoose.model("authors", authorSchema, "authors");

module.exports = Author;