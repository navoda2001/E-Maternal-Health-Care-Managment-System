const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedback = new Schema(
    {        
        rate: {
            type: Number,
            required: true,
        },
        feedback: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        uniqueId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const feedback_Schema = mongoose.model(
    "feedback",
    feedback
);
module.exports = feedback_Schema;
