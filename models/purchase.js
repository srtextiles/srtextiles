const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    items: [{
        price: String,
        name: String,
        quantity: String,
    }, ],
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// doc middleware : runs before .save and .create
purchaseSchema.pre("save", function(next) {
    console.log("saving");
    next();
});
const purchase = mongoose.model("purchase", purchaseSchema);

module.exports = purchase;