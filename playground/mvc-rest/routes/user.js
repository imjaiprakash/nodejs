const express = require("express");
const User = require("../models/user");
const {
        handleGetAllUsers, 
        handleGetUserByID,
        handleCreateUser, 
        handlePatchUser, 
        handleDeleteUser
    } = require("../controllers/user");

const UserRoutes = express.Router();

// UserRoutes.get("/", async (req, res) => {
//     console.log("Get user!!!");
//     handleGetAllUsers(req, res);
// });

UserRoutes
    .get("/", handleGetAllUsers)
    .get("/:id", handleGetUserByID)
    .post("/", handleCreateUser)
    .patch("/:id", handlePatchUser)
    .delete("/:id", handleDeleteUser);

module.exports = UserRoutes;