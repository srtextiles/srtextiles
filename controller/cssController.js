const path = require("path");
exports.utilities = async(req, res) => {
    res.contentType("text/css");
    res.sendFile(path.join(__dirname, "../client/css/utilities.css"));
};
exports.style = async(req, res) => {
    res.contentType("text/css");
    res.sendFile(path.join(__dirname, "../client/css/style.css"));
};
exports.style2 = async(req, res) => {
    res.contentType("text/css");
    res.sendFile(path.join(__dirname, "../client/style2.css"));
};
exports.utilities = async(req, res) => {
    res.contentType("text/css");
    res.sendFile(path.join(__dirname, "../client/css/utilities.css"));
};
exports.style1 = async(req, res) => {
    res.contentType("text/css");
    res.sendFile(path.join(__dirname, "../client/css1/style.css"));
};
exports.demo = async(req, res) => {
    res.contentType("text/css");
    res.sendFile(path.join(__dirname, "../client/css1/demo.css"));
};