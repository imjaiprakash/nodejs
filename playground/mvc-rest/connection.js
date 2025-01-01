const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/youtube?directConnection=true";

const MongoConnection = async function() {
    return await mongoose.connect(DB_URL);
}

module.exports = {MongoConnection};
