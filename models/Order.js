const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    name: String,
    phone: String,
    payment: String
  },
  cart: Object,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
