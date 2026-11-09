import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = () => studentModel.fetch();
export const createStudent = (student) => studentModel.insert(student);
export const updateStudent = (student) => studentModel.update(student);
export const deleteStudent = (id) => studentModel.remove(id);
