import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  searchBooks: function(query) {
    return axios.get("/api/books/search", { params: { q: query } });
  },
  // Gets the book with the given id
  getBooks: function() {
    return axios.get("/api/books/");
  },
   // Gets the book with the given id
   getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("reached API")
    return axios.post("/api/books/", bookData);
  }
};
