const axios = require("axios");
const router = require("express").Router();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

router.get("/search", (req, res) => {
  const queryObj = { params: req.query };
  let query = queryObj.params.q;
  query = query.replace(/\s/g, '');
  console.log(query);
  const URL = BASEURL + query;
  console.log(URL);

  axios
    .get(URL)
    .then(function(response) {
      res.json(response.data.items);
    })
    .catch(err => console.log(err));

});

module.exports = router;
