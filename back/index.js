const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;

const userRoute = require("./routes/users");
const commentRoute = require("./routes/comments");

const corsOptions = {
  origin: "http://127.0.0.1:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(jsonParser);
app.use(urlencodedParser);

app.get("/", (req, res) => {
  res.send("Hello World! :) ola");
});

app.use("/user", userRoute);
app.use("/comment", commentRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
