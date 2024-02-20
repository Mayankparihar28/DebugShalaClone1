import express from "express";
const router = express.Router();

import createStundet from "../controller/controller.student.js";
import getStudents from "../controller/get.students.js";

router.post("/save",createStundet);
router.get("/fetch",getStudents)

router.get("/get",(req,res)=>{
  res.send("working successfully");
})

router.post("/post",(req,res)=>{
  res.send("working successfully12345");
})


export default router;