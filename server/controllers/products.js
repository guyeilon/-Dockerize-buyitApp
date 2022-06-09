import mongoose from 'mongoose';
import Product from '../models/product.js';

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find().sort([['createdAt', -1]]);

		res.status(200).json(products);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const addNewProduct = async (req, res) => {
	const product = req.body;
	console.log(product);
	const newProduct = new Product(product);
	console.log(newProduct);

	try {
		await newProduct.save();
		res.status(201).json(newProduct);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No product with that id');

	const deleteProduct = await Product.findByIdAndRemove(id);

	res.json({ message: 'Product deleted successfully' });
};

export const updateProduct = async (req, res) => {
	const { id: _id } = req.params;
	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');

	const updateProduct = await Product.findByIdAndUpdate(
		_id,
		{ ...product },
		{
			new: true,
		}
	);
	res.json(updateProduct);
};
