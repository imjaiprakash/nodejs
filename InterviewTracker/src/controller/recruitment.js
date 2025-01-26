/** Application dependencies */
const ModelRecruitment = require('../model/recruitment');

const renderRecruitmentList = async (req, res) => {
    const recruitmentList = await ModelRecruitment.find({});
    if(recruitmentList.length > 0) {
        res.status(200).render("list", {recruitmentList});
    } else {
        res.status(400).json({status: 'errro', msg: 'No data found'});
    }
}


const getRecruitmentList = async (req, res) => {
    const list = await ModelRecruitment.find({});
    if(list.length > 0) {
        res.status(200).json(list);
    } else {
        res.status(400).json({status: 'errro', msg: 'No data found'});
    }
}

const getRecruitmentDataById = async (req, res) => {
    const result = await ModelRecruitment.findById(req.params.id);
    if(result) {
        res.status(200).json(result);
    } else {
        res.status(400).json({status: 'errro', msg: `No data found for id: ${req.params.id}`});
    }
}

const postRecruitmentList = async (req, res) => {
    const result = await ModelRecruitment.create(req.body)
    if(result) {
        res.status(200).json(result);
    } else {
        res.status(400).json({status: 'errro', msg: 'Create error'});
    }
}

const patchRecruitmentList = async (req, res) => {
    const result = await ModelRecruitment.findByIdAndUpdate(req.params.id, req.body)
    if(result) {
        res.status(200).json(result);
    } else {
        res.status(400).json({status: 'errro', msg: 'Update error'});
    }
}

module.exports = {
    getRecruitmentList, 
    postRecruitmentList, 
    patchRecruitmentList, 
    getRecruitmentDataById,
    renderRecruitmentList
};