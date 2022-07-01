const path = require("path");
exports.image = async(req, res) => {
    const { image } = req.params;
    res.sendFile(path.join(__dirname, "../client/images/" + image));
};
exports.script = async(req, res) => {
    console.log("req for script");

    res.sendFile(path.join(__dirname, "../client/js1/script.js"));
};