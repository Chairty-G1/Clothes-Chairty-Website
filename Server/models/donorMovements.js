const mongoose = require('mongoose');

const orderMovementsSchema = new mongoose.Schema({
  destinataire: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  orderId: {
    type: Number,
    required: true,
  },
  donorId: {
    type: Number,
    ref: 'Donor',
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('OrderMovements', orderMovementsSchema);
