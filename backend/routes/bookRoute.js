import { Router } from 'express';
import {
    createBook,
    deleteBook,
    editBook,
    fetchAllBooks
} from '../controllers/bookController.js';

const router = Router();

router.get('/', fetchAllBooks);
router.post('/', createBook);
router.put('/:id', editBook);
router.delete('/:id', deleteBook);

export default router;
