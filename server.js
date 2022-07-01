const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;
mongoose
    .connect(DB)
    .then(() => console.log("database connected succesfully :)"));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("haii,your port is running well");
});