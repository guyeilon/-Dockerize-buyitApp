import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import productsRoutes from './routes/products.js';
import salesRoutes from './routes/sales.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '100mb', extended: true }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());

app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);

app.get('/', (req, res) => {
	res.send('Hello to buy-it API');
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT} & MongoDB connection established !`))
	)
	.catch(error => console.log(`${error} did not connect`));
