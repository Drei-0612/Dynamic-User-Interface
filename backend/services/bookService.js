import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = () => bookModel.fetch();
export const createBook = (book) => bookModel.insert(book);
export const updateBook = (book) => bookModel.update(book);
export const deleteBook = (id) => bookModel.remove(id);
