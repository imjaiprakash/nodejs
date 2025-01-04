const express = require("express");
const MongoConnection = require("./connections");
const path = require("path");
const UrlRouter = require("./routes/url");

require('dotenv').config();

console.log("Short-url app......");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/short-url/views"));
app.use(express.urlencoded({extended: false}));

MongoConnection(process.env.DB_CONNECTION_STRING)
    .then(() => {console.log("DB connected!")})
    .catch((err) => {console.log("DB connection error", err)})
    .finally(() => {console.log("Great! Start db operations.")});



app.get("/api/urls/list", (req, res) => {
    console.log("########### Url List ############");
    res.render("home");
});

app.use("/api/urls", UrlRouter);




app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT}`));