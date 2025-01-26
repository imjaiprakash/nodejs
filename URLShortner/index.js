const express = require("express");
const fs = require("fs");

require("dotenv").config();

const {WEB_SERVER_PORT, LOG_FILE_PATH, LOG_FILE} = process.env;


const writeLog = function(file, message) {
    
    fs.appendFile(file, message + "\n", function (err) {
        if(err) console.log(err);
    });
}


writeLog(LOG_FILE_PATH + LOG_FILE, "Hello World!");


const app = express();

app.listen(WEB_SERVER_PORT, () => {
    console.log(`Web server started at ${WEB_SERVER_PORT}`);
});