const express = require("express");

const {readLog, writeLog} = require("./util/file-system");

const app = express();
const router = express.Router();


//Custom Middleware Function
function loginUrl(req, res, next) {
    console.log("Req URL: ", req.originalUrl);
    next();
}

function loginMethod(req, res, next) {
    console.log("Req method: ", req.method);
    next();
}

const logStuff = [loginUrl, loginMethod];


//App level middleware
app.use((req, res, next) => {
    console.log("Middleware#1");
    next();
});


// Router level Middleware
router.use("/user/:id", (req, res, next) => {
    console.log("Router Middleware#1");
    next();
});

// Router level Middleware
router.get("/user", (req, res, next) => {
    console.log("Router GET Middleware#1");
    next();
});

//Error level middleware
app.get("/users", (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });

  app.get("/users", (req, res) => {
    console.error("Users");
  });  

app.use((req, res, next) => {
    console.log("Middleware#2");
    next();
});

app.use("/user/:id", logStuff, (req, res, next) => {
    console.log("Middleware#2.2");
    next();
});

app.get("/user/:id", (req, res, next) => {
    console.log("Middleware#2.1");
    next();
});

app.use("/", router);
// Middelware end


app.get("/", (req, resp) => {
    resp.send("Route endpoint!");
});


app.get("/user", (req, resp) => {
    resp.send("User endpoint!");
});

app.get("/user/:id", (req, resp) => {
    resp.send("User endpoint with id!");
});

app.listen("8000", () => {
    writeLog("Server started.");
});