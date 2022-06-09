import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	imageUrl: String,
	date: {
		type: Date,
		default: new Date(),
	},
	stats: {
		order: Number,
		uniqueOrder: Number,
	},
});

const Product = mongoose.model('Product', productSchema);

export default Product;
