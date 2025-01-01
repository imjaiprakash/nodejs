const express = require("express");
const mongoose = require("mongoose");

const {MongoConnection} = require("./connection");
const {logReqRes} = require("./middlewares/file-system");
const UserRoutes = require("./routes/user");

const User = require("./models/user");

const app = express();


app.use(express.urlencoded({extended: false}));
app.use(logReqRes());


//Mongo connection
MongoConnection()
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error", err));



app.use("/api/users", UserRoutes);


//Server start
app.listen("8000", () => {
    console.log("Server started.");
})