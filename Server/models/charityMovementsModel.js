const mongoose = require('mongoose');

const charitiesMovementsSchema = new mongoose.Schema({
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
  charity_id: {
    type: String,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('CharityMovements', charitiesMovementsSchema);
