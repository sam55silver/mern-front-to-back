const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Ay yo take me out to dinner?"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
