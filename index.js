const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});
const start = async () => {
  try {
    app.listen(PORT, () => console.log("start", PORT));
  } catch (e) {
    console.log(e);
  }
};
start();
