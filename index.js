const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});
const start = async () => {
  try {
    app.listen(8000, () => console.log("start", 8000));
  } catch (e) {
    console.log(e);
  }
};
start();
