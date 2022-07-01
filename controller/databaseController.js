const path = require("path");
var url = require("url");

const subscribeus = require("../models/subscribeus");
const reviews = require("../models/reviews");
const buyitems = require("../models/buyitems");
const purchase = require("../models/purchase");
exports.subscribeus = async(req, res) => {
    console.log(req.query);
    try {
        await subscribeus.create(req.query);
        res.send("successfulled saved");
    } catch (err) {
        res.send("failed");
    }
    console.log("req from suscribe us");
};
exports.reviews = async(req, res) => {
    console.log(req.query);
    try {
        await reviews.create(req.query);
        res.send("successfulled saved");
    } catch (err) {
        res.send("failed");
    }
    console.log("req from suscribe us");
};
exports.buyProducts = async(req, res) => {
    var url_parts = url.parse(req.headers.referer, true);
    var query = url_parts.query;
    try {
        const params = req.query;
        const { name, email, number, address } = params;
        const { item, price, quantity } = query;
        await buyitems.create({
            name,
            email,
            number,
            address,
            item,
            price,
            quantity,
        });
        res.send("successfulled saved");
    } catch (err) {
        console.log(err);
        res.send("failed");
    }
};
exports.purchase = async(req, res) => {
    try {
        const data = req.body;
        await purchase.create(data);

        res.send("successfulled saved");
    } catch (err) {
        console.log(err);
        res.send("failed");
    }
};