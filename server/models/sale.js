import { format } from 'date-fns';
import mongoose from 'mongoose';

const saleSchema = mongoose.Schema({
	totalSale: Number,
	date: String,
});

const Sale = mongoose.model('Sale', saleSchema);

export default Sale;
