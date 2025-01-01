const express = require("express");
const {writeLog, readLog} = require("../src/util/file-system");

const app = express();

app.get('/', (req, resp) => {
    return resp.send("Home page");
});

app.get('/about', (req, resp) => {
    if(req.query.name) {
        resp.send(`Hello ${req.query.name}`);
    } else { 
        return resp.send("About page");
    }
});


app.listen(8000, () => writeLog(`Server started.`));
