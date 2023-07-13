const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require('dotenv').config();
const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

const list = require("./api/menu");

app.use("/api/menu", list);

app.listen(port, (error) => {
  if (!error) {
    console.log("connection successfull!!");
  } else {
    console.log("connection error!");
  }
});
