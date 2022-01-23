const express = require("express");
router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET API/auth
// @desc    Test route
// @access  Public
router.get("/", auth, (req, res) => {
  res.send("Auth route");
});

module.exports = router;
