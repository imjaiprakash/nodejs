//const fileSystem = require("node:fs"); OR
const fileSystem = require("fs");
const {getFormattedDate} = require("./date");

const FILE_NAME = "access-log.txt";
const FOLDER_NAME = "./logs";
const FILE_WITH_PATH = FOLDER_NAME + "/" + FILE_NAME;

const writeLog = function(content) {
    
    // var displayDate = Date().getFullYear();
    // console.log(displayDate);



    var log = `\n${getFormattedDate()} | ${FILE_WITH_PATH} | ${content}`;
    fileSystem.appendFile(FILE_WITH_PATH, log, (err) => {
        if(err) {
            console.log(`${getFormattedDate()} ${FILE_WITH_PATH} file write access error.`);
            console.log(err);
        }
    });
}

const readLog = function() {
    fileSystem.readFile(FILE_WITH_PATH, "utf-8", (err, content) => {
        if(err) {
            console.log(`${getFormattedDate()} ${FILE_WITH_PATH} file read access error.`);
            console.log(err);
        } else {
            console.log(`Content from ${FILE_WITH_PATH}`);
            console.log(content);
        }
    });
}


const logReqRes = function() {
    return (req, res, next) => {
        writeLog(`\n ${req.ip} - ${req.method} - ${req.path}`);
        next();
    };

}

module.exports = {logReqRes};