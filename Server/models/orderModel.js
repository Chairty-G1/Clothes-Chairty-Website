const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  number_pieces: {
    type: Number,
    required: true,
  },
  order_type: {
    type: String,
    required: true,
  },
  is_delete: {
    type: Boolean,
    default: false,
  },
  available: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  donor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
