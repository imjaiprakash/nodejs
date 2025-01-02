const ModelUrl = require("../models/url");
const shortId = require("shortid");

const getUrlList = async function(req, res) {
    console.log("########## getUrlList ###########");
    const urlList = await ModelUrl.find({});
    if(urlList.length > 0)
        res.status(200).json(urlList);
    else 
        res.status(404).json({status: 'Error', message: 'No record found.'});
}

const createShortUrl = async function(req, res) {
    console.log("########## createShortUrl ###########");
    const shortID = shortId();
    const data = req.body;
    const result = await ModelUrl.create({
        shortId: shortID,
        redirectUrl: data.redirectUrl,
        clickHistory: []
    });
    res.status(200).json(result);
}

const pathShortUrl = async function(req, res) {
    console.log("########## pathShortUrl ###########");
    const id = req.params.id;
    const data = req.body;

    const result = await ModelUrl.findByIdAndUpdate(id, data);
    res.status(200).json(result);
}

const getUrlById = async function(req, res) {
    console.log("########## getUrlById ###########");
    //const result = ModelUrl.findById(req.params.id);
    const result = await ModelUrl.find({_id: req.params.id});
    
    if(result.length > 0) 
        return res.status(200).json(result);
    else 
        return res.status(400).json({status: "Error", message: "No record found."});
}

const redirectUrlToFullUrlByShortId = async function(req, res) {
    console.log("########## redirectUrlToFullUrlByShortId ###########");

    const result = await ModelUrl.findOneAndUpdate(
        {
            shortId: req.params.shortId
        },
        {
            $push: {
                clickHistory: {
                    timestamp: Date.now()
                }
            }
        }
    );

    console.log(result.redirectUrl);
    if(result.redirectUrl) 
        return res.redirect(result.redirectUrl);
    else 
        return res.status(400).json({status: "Error", message: "No record found."});

}

const getUrlStatsAll = async function(req, res) {

    console.log("########## getUrlStatsAll ###########");
    const result = await ModelUrl.find({});

    let statsResult = [];

    result.forEach(element => {
        statsResult.push({
            redirectUrl: element.redirectUrl,
            clickCount: element.clickHistory.length,
            analytics: element.clickHistory
        });
    });

    console.log(statsResult.length);

    if(statsResult.length > 0) {
        res.status(200).json(statsResult);
    }
    else 
        res.status(400).json({status: 'Error', msg: 'No record found for the ShortId.'})

}

const getUrlStatsByShortId = async function(req, res) {
    console.log("########## getUrlStatsByShortId ###########");

    const result = await ModelUrl.findOne({shortId:req.params.shortId});

    let statsResult = [];

    if(result) {
        statsResult = {
            url: result.redirectUrl,
            visits: result.clickHistory.length,
            analytics: result.clickHistory
        };
        
        res.status(200).json(statsResult);
    }
    else 
        res.status(400).json({status: 'Error', msg: 'No record found for the ShortId.'})

}


module.exports = {
    getUrlList,
    createShortUrl,
    pathShortUrl,
    getUrlById,
    redirectUrlToFullUrlByShortId,
    getUrlStatsAll,
    getUrlStatsByShortId
};