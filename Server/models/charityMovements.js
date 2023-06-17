const mongoose = require('mongoose');

const charitiesMovementsSchema = new mongoose.Schema({
  destinataire: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  order_id: {
    type: Number,
    required: true,
  },
  charityId: {
    type: Number,
    ref: 'Charity',
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('CharitiesMovements', charitiesMovementsSchema);
