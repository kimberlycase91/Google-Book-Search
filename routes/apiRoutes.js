const axios = require("axios");
const router = require("express").Router();
const BASEURL = "";
const APIKEY = "AIzaSyBUIO1yKdEROP4BAKiWMwTvGuw7bor3BfE";

router.get("/books", (req, res) => {
  axios
    .get(BASEURL + query + APIKEY, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


module.exports = router;
