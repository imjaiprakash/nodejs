const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    },
    salary: {
        type: Number,
        default: 0,
        require: true
    }
},
{
    timestamps: true
}
);

//DB Model
const User = mongoose.model('User', userSchema);

module.exports = User;