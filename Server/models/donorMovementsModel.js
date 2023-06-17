const mongoose = require('mongoose');

const orderMovementsSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  donor_id: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('DonorMovements', orderMovementsSchema);
