import { Router } from 'express';
import {
    createStudent,
    deleteStudent,
    editStudent,
    fetchAllStudents
} from '../controllers/studentController.js';

const router = Router();

router.get('/', fetchAllStudents);
router.post('/', createStudent);
router.put('/:id', editStudent);
router.delete('/:id', deleteStudent);

export default router;
