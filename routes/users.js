// import express from "express";
// const router = express.Router();
// import express from 'express'
import { Router } from "express";
import {
   getAllUsers,
   getUserById,
   createUser,
   updateUser,
   deleteUser,
} from "../models/users.js";

// const router = express.Router()

const router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   res.json({ message: "I wish we had some information to give you ☹️" });
});

router.get("/test", async function (req, res) {
   res.json({
      success: true,
      message: "I am a super API",
   });
});

// Get all users
router.get("/users", function (req, res, next) {
   const allUsers = getAllUsers();
   res.json({ success: true, payload: allUsers });
});

// Get user by id
router.get("/users/:id", function (req, res) {
   const id = req.params.id;
   const idReturned = getUserById(id);
   res.json({ success: true, payload: idReturned });
});

// Doing Post request
router.post("/users", function (req, res) {
   const newUserData = req.body;
   const addedUser = createUser(newUserData);
   res.json({ success: true, payload: addedUser });
});

//Update user
router.put("/users/:id", function (req, res) {
   const id = Number(req.params.id);
   const updates = req.body;

   const updatedUser = updateUser(id, updates);

   res.json({ success: true, payload: updatedUser });
});

// Delete item
router.delete("/users/:id", function (req, res) {
   const id = Number(req.params.id);
   const deletedUser = deleteUser(id);

   res.json({ success: true, payload: deletedUser });
});

export default router;
