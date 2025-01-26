const express = require("express");

/** Application dependencies */
const {
    getRecruitmentList, 
    postRecruitmentList, 
    patchRecruitmentList,
    getRecruitmentDataById,
    renderRecruitmentList
} = require("../controller/recruitment");

const routeRecuitement = express.Router();

routeRecuitement
    .get("/", getRecruitmentList)
    .get("/list", renderRecruitmentList)
    .get("/:id", getRecruitmentDataById)
    .post("/", postRecruitmentList)
    .patch("/:id", patchRecruitmentList)
    ;

module.exports = routeRecuitement;