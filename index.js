const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello BootCamp learner");
});

app.listen(port, () => {
  console.log(`Boot camp learner ${port}`);
});
