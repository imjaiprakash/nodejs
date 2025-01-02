const express = require("express");

const {
        getUrlList, 
        createShortUrl, 
        pathShortUrl, 
        getUrlById,
        redirectUrlToFullUrlByShortId,
        getUrlStatsAll,
        getUrlStatsByShortId
    } = require("../controllers/url");


const routerUrl = express.Router();

routerUrl
    .get("/", getUrlList)
    .post("/", createShortUrl)
    .patch("/:id", pathShortUrl)
    .get("/stats", getUrlStatsAll)
    .get("/stats/:shortId", getUrlStatsByShortId)
    .get("/:id", getUrlById)
    .get("/redirect/:shortId", redirectUrlToFullUrlByShortId);
    
    //app.get(/^\/url\/\d+$/, (req, res)

    module.exports = routerUrl;