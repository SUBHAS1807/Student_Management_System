const express = require("express");
const Student = require("../models/student");
const router = express.Router();

router.post("/students", async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({
            message: "Failed to Create",
            error: error.message
        });
    }
}
);


router.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch the student data ",
            error: error.message
        });
    }
})


router.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Student",
            error: error.message
        });
    }
});


router.put("/students/:id",async (req,res)=>{
    try{
        const updateStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
    }catch(error){
        res.status(500).json({
            message:"Failed to fetch",
            error: error.message
        });
    }
})


router.delete("/students/:id", async (req,res)=>{
    try{
        const deletedStudent = await Student.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json({
            message: "Student deleted successfully",
            student: deletedStudent
        });
    }
    catch(error){
        res.status(500).json({
            message: "Failed to fetch",
            student: error.message
        });
    }
});

module.exports = router;