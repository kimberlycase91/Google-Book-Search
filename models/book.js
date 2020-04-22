const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: true },
  link: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
