const mongoose = require("mongoose");

/**
 * Get Mongo connection object
 */
const getMongoConnection = async function(URL) {
    return await mongoose.connect(URL);
}

module.exports = getMongoConnection;