const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create)

// Matches with "/api/books"
router.route("/saved")
  .get(booksController.findAll);

// Matches with "/api/books/:id"
router
  .route("/saved:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;