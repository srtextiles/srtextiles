const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "have a name"],
    },

    number: {
        type: Number,
        required: [true, "have a number"],
    },
    email: {
        type: String,
        required: [true, "must have a email "],
    },
    message: {
        type: String,
        required: [true, "must have a message "],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// doc middleware : runs before .save and .create
reviewsSchema.pre("save", function(next) {
    console.log("saving");
    next();
});
const reviews = mongoose.model("reviews", reviewsSchema);

module.exports = reviews;