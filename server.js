const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/kaffeeDB');

const orderSchema = new mongoose.Schema({
  user: {
    name: String,
    phone: String,
    paymentMode: String
  },
  cart: Object,
  createdAt: Date
});

const Order = mongoose.model('Order', orderSchema);

app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order saved!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving order', error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
