const express = require("express");
router = express.Router();

// @route   GET api/post
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
  res.send("Posts route");
});

module.exports = router;
