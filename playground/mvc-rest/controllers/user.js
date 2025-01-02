const User = require("../models/user");


// Handle the response get user list route
const handleGetAllUsers = async function(req, res) {
    //Set custom header
    res.setHeader("X-DB-DEMO", "MongoDB");
    console.log("Get user!");
    const result = await User.find({});
    res.status(200).json(result);
}

// Handle the response get user list route
const handleGetUserByID = async function(req, res) {
    console.log("Get a user by id!");
    const result = await User.find({_id:req.params.id});
    if(result.length > 0)
        res.status(200).json(result);
    else 
        res.status(404).json({error: 'No record found!'});
}


const handleCreateUser = async function (req, res) {
    console.log("Create user!");
    const body = req.body;
    
    //Data Validation
    if(!body || !body.firstName || !body.email || !body.salary) {
        return res.status(400).json({msg: "Name, email and salary fields are required."});
    }

    const result = await User.create(body);
    return res.status(201).json({msg: "Success", data: result});
}

const handlePatchUser = async function(req, res) {
    console.log("Patch user!");
    const body = req.body;
    
    //Data Validation
    if(!body || !req.params.id) {
        return res.status(400).json({msg: "Id and Name are required."});
    }

    const result = await User.findByIdAndUpdate(req.params.id, body);
    
    console.log(result);
    return res.status(200).json({msg: "Updated", data: result});
}

const handleDeleteUser = async function(req, res) {
    console.log("Delete user!");
    console.log(req.params.id);
    if(!req.params.id)
        return res.status(400).json({msg: "Id is required in parameter."});

    const result = await User.findByIdAndDelete(req.params.id);

    console.log(result);
    return res.status(200).json({msg:"Deleted", data: result});
}


module.exports = {
    handleGetAllUsers,
    handleGetUserByID,
    handleCreateUser,
    handlePatchUser,
    handleDeleteUser
};