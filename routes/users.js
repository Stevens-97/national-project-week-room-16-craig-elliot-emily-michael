import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   res.json({ message: "I wish we had some information to give you ☹️" });
});

router.get("/test", function (req, res, next) {
   return res.json({ message: "success" });
});

export default router;
