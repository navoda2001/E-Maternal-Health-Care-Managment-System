const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const article = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        file: {
            type: String,
            required: true,
        },        
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
const article_Schema = mongoose.model(
    "article",
    article
);
module.exports = article_Schema;
