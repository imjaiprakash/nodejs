/** Environment variable */
require('dotenv').config();

/** Global Dependencies */
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

/** Application dependencies */
const routeRecruitment = require('./route/recruitment');
const {writeLog, logReqRes} = require('./util/log-processor');


/** Express initializer */
const app = express();
//app.set('views', path.join(__dirname, './view/recruitment'));
app.set('views', [__dirname + '/view/recruitment', __dirname + '/view/company']);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(logReqRes());

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(`Connected to MongoDB: ${process.env.MONGO_URL}`))
    .catch(err => {console.log('Error as ', err)});

app.use("/recruitment", routeRecruitment);

app.listen(PORT, () => {
    console.log(`Welcome! App server started at ${PORT}`);
    //writeLog(`Welcome! App server started at ${PORT}`);
});