const url = require("url");

const routes = function routeController(req, resp) {

    var q = url.parse(req.url, true);

    switch (q.pathname) {
        case "/":
            resp.end("Home Page");
            break;
        case "/about":
            resp.end(`Hello ${q.query.name}, your eid is ${q.query.eid}!`);
            break;
        case "/contact":
            resp.end("Contact");
            break;
        case "/favicon.ico":
            resp.end("/favicon.ico");
            break;
        default:
            resp.end("Sorry, invalid page: 404", (err) => {
                console.log("Defualt error!" + reqPath);
            });
    }
}

module.exports = {"routeController" : routes};