import mongoose from 'mongoose';
import Sale from '../models/sale.js';

export const getSales = async (req, res) => {
	try {
		const sales = await Sale.find().sort([['createdAt', -1]]);

		res.status(200).json(sales);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const addNewSale = async (req, res) => {
	const sale = req.body;
	console.log(sale);
	const newSale = new Sale(sale);
	console.log(newSale);

	try {
		await newSale.save();
		res.status(201).json(newSale);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateSale = async (req, res) => {
	const { id: _id } = req.params;
	const sale = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No sale with that id');

	const updateSale = await Sale.findByIdAndUpdate(
		_id,
		{ ...sale },
		{
			new: true,
		}
	);
	res.json(updateSale);
};
