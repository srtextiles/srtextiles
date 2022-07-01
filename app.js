const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pageRoute = require("./routes/pageRoutes");
const cssRoute = require("./routes/cssRoutes");
const imageRoute = require("./routes/imageRoutes");
const databaseRoute = require("./routes/databaseRoutes");
const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use("/", pageRoute);
app.use("/", cssRoute);
app.use("/", imageRoute);
app.use("/", databaseRoute);

module.exports = app;