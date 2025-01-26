const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

// create application/raw parser
//app.use(express.raw());

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
//app.use(bodyParser.urlencoded({ extended: false }));

let signedToken = "";

app.post("/user/generateToken", (req, res) => {
    // const payload = {
    //     name: "Jai Mishra",
    //     email: "jai.mishra@gmail.com",
    //     role: "admin",
    //     _id: "8kh4jh4-877365-lk34j5klj8-953475"
    // };
    const payload = req.body;
    //console.log(payload);
    signedToken = jwt.sign(payload, process.env.JWT_TOKEN_SECRET);
    console.log(signedToken);
    res.send({status:"success", token:signedToken}).status(200);
});


app.post("/user/validateToken", (req, res) => {
    let decryptedPaylaod = ""; 
    try {
        signedToken = signedToken + "x";
        console.log(signedToken);
    
        decryptedPaylaod = jwt.verify(signedToken, process.env.JWT_TOKEN_SECRET);
        console.log(decryptedPaylaod);

        if(decryptedPaylaod) {
            return res.status(200).send({status: "Success", "message":"Token verified"});
        }
        else {
            return res.status(400).send({status: "Fail", "message":"Unauthorized token!"});
        }
    }
    catch (e) {
        return res.status(401).send({status: "Exception", "message":e.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});