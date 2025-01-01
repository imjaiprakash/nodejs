const express = require("express");
const fs = require("fs");


const {writeLog, readLog} = require("./src/util/file-system");
const users = require("./db/MOCK_USER_DATA.json");
const { error } = require("console");

const PORT = 8000;

const app = express();

app.use(express.urlencoded({extended: false}));


app.get("/users", (req, resp) => {
    writeLog("Read all users.");
    return resp.json(users);
});

app.post("/users", (req, res) => {
    writeLog("Create a user.");
    //const body = req.body;
    //   console.log(body);
    //   console.log(data);
    // const id = req.params.id;
    // const user = users.find((user) => user.id == id);
    users.push({id: (users.length + 1), ...req.body});
    fs.writeFile("./db/MOCK_USER_DATA.json", JSON.stringify(users), (err, result) => {
        if(err) {
            console.error(err);
            writeLog("User create error");
        } else {
            writeLog("User created, id#" + users.length);
        }
    });

    return res.json({status: "User created, id#" + users.length});
});

// app.get("/users/:id", (req, res) => {
//     writeLog("Read a user.");

//     const id = req.params.id;
//     user = users.find((user) => user.id == id);
//     return res.json(user);
//     //resp.send("Read a user:"+id);
// });


app.route("/users/:id")
    .get((req, res) => {
        writeLog("Read a user.");
        const id = Number(req.params.id);
        const user = users.find((user) => user.id == id);
        return res.json(user);
    })
    .patch((req, res) => {
        writeLog("Update a user.");
        // const id = req.params.id;
        // const user = users.find((user) => user.id == id);
        return res.json({status: "success"});
    })
    .delete((req, res) => {
         writeLog("Delete a user.");
        // const id = req.params.id;
        // const user = users.find((user) => user.id == id);
        return res.json({status: "success"});
    });

app.listen(PORT, () => writeLog("Server started!"));