const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pageRoute = require("./routes/pageRoutes");
const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use("/", pageRoute);


module.exports = app;