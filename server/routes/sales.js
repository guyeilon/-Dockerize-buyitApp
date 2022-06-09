import express from 'express';

import { getSales, addNewSale, updateSale } from '../controllers/sales.js';

const router = express.Router();

router.get('/', getSales);
router.post('/', addNewSale);

router.patch('/:id', updateSale);

export default router;
