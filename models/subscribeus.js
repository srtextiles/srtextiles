const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
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
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// doc middleware : runs before .save and .create
subscribeSchema.pre("save", function(next) {
    console.log("saving");
    next();
});
const Subscribe = mongoose.model("subscribeus", subscribeSchema);

module.exports = Subscribe;