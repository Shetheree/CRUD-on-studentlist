const Student = require("../models/Student_model");

// Add a new student
const addStudent = async (req, res) => {
  try {
    console.log(req.body);
    const { studentname, studentrollno, studentdepartment, studentemail, studenttotalmarks } = req.body;

    const newStudent = new Student({
      studentname,
      studentrollno,
      studentdepartment,
      studentemail,
      studenttotalmarks
    });

    await newStudent.save();
    console.log("Student added successfully!");
    res.status(201).json({ message: "Student added successfully!", student: newStudent });
  } catch (error) {
    console.log("Server Error", error);
    res.status(500).json({ message: "Error adding student", error });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ message: "Student deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed!" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
  } catch (error) {
    res.status(500).json({ message: "Error updating student", error });
  }
};



module.exports = { addStudent, getAllStudents, deleteStudent, getStudentById,updateStudent};
