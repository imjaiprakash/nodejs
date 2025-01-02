const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    clickHistory: [{ timestamp: { type: Number } } ],
},
{
    timestamps: true
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;
