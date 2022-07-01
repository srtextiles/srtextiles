const mongoose = require("mongoose");

const buyitemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a name"],
    },

    number: {
        type: Number,
        required: [true, "must have a number"],
    },
    email: {
        type: String,
        required: [true, "must have a email "],
    },
    address: {
        type: String,
        required: [true, "must have a address "],
    },
    item: {
        type: String,
        required: [true, "must have a itemname "],
    },
    price: {
        type: String,
        required: [true, "must have a price "],
    },
    quantity: {
        type: String,
        required: [true, "must have a price "],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// doc middleware : runs before .save and .create
buyitemsSchema.pre("save", function(next) {
    console.log("saving");
    next();
});
const buyitems = mongoose.model("buyitems", buyitemsSchema);

module.exports = buyitems;