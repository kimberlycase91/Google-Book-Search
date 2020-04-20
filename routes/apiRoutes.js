const axios = require("axios");
const router = require("express").Router();
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBUIO1yKdEROP4BAKiWMwTvGuw7bor3BfE";

router.get("/books", (req, res) => {
  const queryObj = { params: req.query };
  let query = queryObj.params.q;
  query = query.replace(/\s/g, '');
  console.log(query);
  const URL = BASEURL + query + APIKEY
  console.log(URL);

  axios
    .get(URL)
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    });

});

module.exports = router;
