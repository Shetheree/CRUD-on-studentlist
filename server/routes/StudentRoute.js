const express = require("express");
const router = express.Router();
const { addStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } = require("../controller/StudentController");

router.post("/add", addStudent);
router.get("/all", getAllStudents); 
router.delete("/delete/:id", deleteStudent);
router.get("/student/:id", getStudentById);
router.put("/update/:id", updateStudent); // ✅ Add this


module.exports = router;
