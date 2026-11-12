import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudents();
        res.status(200).json(students);
    } catch (e) {
        console.error("Database error in fetchAllStudents:", e);
        res.status(500).json({ error: e.message || "Internal Server Error" });
    }
}

export const createStudent = async (req, res) =>{
    console.log(req);
    const {name, srCode, program} = req.body;
    const student = {name, srCode, program};

    try{
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ 
            error: "Internal Server Error"
        });
    }
}

export const editStudent = async (req, res) =>{ 
    const {name, srCode, program} = req.body;
    const { id } = req.params;
    const student = {id: parseInt(id), name, srCode, program};

    try{
        const updatedStudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

export const deleteStudent = async (req, res) =>{
    const { id } = req.params;

    try{
        const deletedStudent = await studentService.deleteStudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedStudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}