const http = require("http");
const {writeLog, readLog} = require("../src/util/file-system");
const {routeController} = require("./app-routes");



// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(q.query.month);




const server = http.createServer((req, resp) => {
    //Ignore the favion.ico request
    if(req.url === "/favicon.ico") resp.end();
    else {
        //var q = url.parse(req.url, true);
        // console.log(q);

        /*The parse method returns an object containing url properties*/
        // console.log("Host " + q.host);
        // console.log("Pathname " + q.pathname);
        // console.log("Search " + q.search);
        // console.log(q.query.name);
        // console.log("Query " + q.queryString);

        // /*The query property returns an object with all the querystring parameters as properties:*/
        // console.log(q.query.eid);
        // console.log(q.query.name);
        
        // console.log(url.parse(req.url, true));

        // var eid = pathname.query.eid;
        // var name = pathname.query.name;

        // resp.end(`${pathname} | ${eid} | ${name}`);

        //For server console
        writeLog(`Request init | ${req.url}`);
        //console.log(req.headers);

        //For user
        routeController(req, resp);
        //resp.end(`Hello user.`);

        writeLog(`Response sent.`);
    }
}).listen(8000, () => {
    //For server
    writeLog(`Server started.`);
});