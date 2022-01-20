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
   getAnonFB,
   postAnonFB,
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
router.get("/users", async function (req, res, next) {
   const allUsers = await getAllUsers();
   res.json({ success: true, payload: allUsers });
});

//Get anonymous feeback
router.get("/AnonymousFeedback", async function (req, res, next) {
   const allFeedback = await getAnonFB();
   res.json({ success: true, payload: allFeedback });
});

// Get user by id
router.get("/users/:id", async function (req, res) {
   const id = req.params.id;
   const idReturned = await getUserById(id);
   res.json({ success: true, payload: idReturned });
});

// Doing Post request
router.post("/users", function (req, res) {
   // console.log(req.body);
   const {
      name,
      chort,
      date,
      dailyFeedBack,
      workShopRating,
      guestLectureRating,
      userFeelingRating,
      bootcamperOfTheWeek,
   } = req.body;
   const data = createUser(
      name,
      chort,
      date,
      dailyFeedBack,
      workShopRating,
      guestLectureRating,
      userFeelingRating,
      bootcamperOfTheWeek
   );

   res.json({ success: true, payload: data });
});

//Doing Anonymous Post Request
router.post("/AnonymousFeedback", function (req, res){
   const {
      date,
      name
   } = req.body;
   const data = postAnonFB(
      date, 
      name
   );
   res.json({ success: true, payload: data });
})

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
