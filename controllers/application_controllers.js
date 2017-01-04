//require express and path
var express = require('express');
var path = require('path');

var router  = express.Router();


// Main "/" Route. This will redirect the user to our rendered React application
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = router;