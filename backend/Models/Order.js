const mongoose = require("mongoose");

const order = new mongoose.Schema({
  material: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  deliverySite: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  statusUpdateDate: {
    type: Date,
    default: Date.now,
  },
  declineReason: {
    type: String,
  },
  declineDescription: {
    type: String,
  },
});

const Order = mongoose.model("order", order);
module.exports = Order;
