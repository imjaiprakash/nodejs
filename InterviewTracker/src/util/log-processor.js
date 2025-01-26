/** Environment variable */
require('dotenv').config();

const logFile = require("fs");

const getDate = function() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let msec = today.getMilliseconds();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    if (msec < 10) msec = '00' + msec;
    else if(msec < 100) msec = '0' + msec;
    return {
        fileRule: yyyy + "-" + mm + "-" + dd,
        timeStamp: yyyy + "-" + mm + "-" + dd + "-" + hr + ":" + min + ":" + sec + "."+msec
    };
}

/** Create a new log file everyday  */
const writeLog = function(message) {
    //console.log("Write log as: ", message);
    const getDateVal = getDate();
    let FILE = process.env.ACCESS_LOG_FILE_PREFIX + getDateVal.fileRule + ".log";
    //logFile.existsSync(FILE) 
    logFile.appendFile(FILE, "\n" + getDateVal.timeStamp + ": " + message, (err) => {
        console.log("Log written to file: " + FILE);
    });
}

const logReqRes = function() {
    return (req, res, next) => {
        writeLog(`${req.ip} - ${req.method} - ${req.path} - ${JSON.stringify(req.body)}`);
        next();
    };

}

module.exports = {writeLog, logReqRes};