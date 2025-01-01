const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.urlencoded({extended: false}));

//Mongo connection
mongoose
    .connect("mongodb://localhost:27017/youtube?directConnection=true")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error", err));

//Schema
const userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        jobTitle: {
            type: String
        },
        gender: {
            type: String
        },
        salary: {
            type: Number,
            default: 0,
            require: true
        }
    },
    {
        timestamps: true
    }
);

//DB Model
const User = mongoose.model('User', userSchema);

app.get("/api/users", async (req, res) => {
    res.setHeader("X-DB-DEMO", "MongoDB");
    //return mongoose.

    const result = await User.find({});
    res.status(200).json(result);

});


app.post("/api/users", async (req, res) => {
    const body = req.body;
    //Data Validation
    if(!body || !body.first_name || !body.email || !body.salary) {
        return res.status(400).json({msg: "Name, email and salary fields are required."});
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender,
        salary: body.salary
    });

    console.log(result);
    return res.status(201).json({msg: "Success"});
});

app.patch("/api/users/:id", async (req, res) => {
    const body = req.body;

    console.log(body);

    //Data Validation
    if(!body || !body.id || !body.first_name) {
        return res.status(400).json({msg: "Id and Name are required."});
    }

    const result = await User.findByIdAndUpdate(body.id, {firstName: body.first_name});
    
    console.log(result);
    return res.status(200).json({msg: "Updated"});

});

app.delete("/api/users/:id", async (req, res) => {
    const body = req.body;
    
    const result = await User.findByIdAndDelete(body.id);

    console.log(result);
    return res.status(200).json({msg:"Deleted"});
});


//Server start
app.listen("8000", () => {
    console.log("Server started.");
})