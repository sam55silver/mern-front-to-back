const express = require("express");
router = express.Router();

// @route   GET API/users
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
  res.send("User route");
});

module.exports = router;
