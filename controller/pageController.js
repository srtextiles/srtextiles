const path = require("path");
exports.index = async(req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
};
exports.about = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/about.html"));
exports.services = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/services.html"));
exports.product = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/product.html"));
exports.contact = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/contact.html"));
exports.wholesale = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/wholesale.html"));
exports.features = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/features.html"));
exports.sarees = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/sarees.html"));
exports.dhotis = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/dhotis.html"));
exports.mats = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/mats.html"));
exports.curtains = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/curtains.html"));
exports.buynow = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/buynow.html"));
exports.rugs = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/rugs.html"));
exports.towels = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/towels.html"));
exports.bedsheets = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/bedsheets.html"));
exports.kerchiefs = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/kerchiefs.html"));
exports.docs = async(req, res) =>
    res.sendFile(path.join(__dirname, "../client/docs.html"));