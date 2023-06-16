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
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  donor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
});

const OrderMovements = mongoose.model('OrderMovements', orderMovementsSchema);

module.exports = OrderMovements;
