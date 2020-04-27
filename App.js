const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(require("./routes/login"));
app.use(require("./routes/createUser"));

app.get("/", (req, res) => {
  res.status(500).json({ message: "HELLO WORLD!!!" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
