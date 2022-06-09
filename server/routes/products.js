import express from 'express';

import { getProducts, addNewProduct, deleteProduct, updateProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addNewProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);

export default router;
