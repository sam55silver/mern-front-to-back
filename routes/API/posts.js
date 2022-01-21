const express = require("express");
router = express.Router();

// @route   GET API/post
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
  res.send("Posts route");
});

module.exports = router;
