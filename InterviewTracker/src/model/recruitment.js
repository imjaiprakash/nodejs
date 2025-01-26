const mongoose = require("mongoose");

const recruitmentSchema = new mongoose.Schema({
        interviewDate: {
            type: Date
        },
        company: {
            type: String, 
            required: true,
            index: true,
            unique: true
        },
        agency: {
            type: String
        },
        location: {
            type: String, 
            required: true
        },
        jobTitle: {
            type: String,
            required: true
        },
        techStack: {
            type: String,
            required: true
        },
        ctc: {
            type: Number
        },
        ectc: {
            type: Number
        },
        workType: {
            type: String
        },
        status: {
            type: Boolean
        }
    }, 
    {
        timestamps: true
    }
);

const ModelRecruitment = mongoose.model("recruitment", recruitmentSchema);
//console.log("ModelRecruitment############", ModelRecruitment);
module.exports = ModelRecruitment;
