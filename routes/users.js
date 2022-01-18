// import express from "express";
// const router = express.Router();
// import express from 'express'
import { Router } from 'express';

// const router = express.Router()

const router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   res.json({ message: "I wish we had some information to give you ☹️" });
});

router.get('/test', async function (req, res) {
  res.json({
      success: true,
      message: "I am a super API",
  });
});

export default router;
