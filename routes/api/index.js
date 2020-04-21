const router = require("express").Router();
const bookRoutes = require("./books");
const searchRoute = require("./search");

// Book routes
router.use("/books", bookRoutes);
router.use("/books", searchRoute);

module.exports = router;
