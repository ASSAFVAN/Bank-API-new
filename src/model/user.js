const mongoose = require("mongoose");

const Users = mongoose.model("User", {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  cash: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },

  credit: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
});
module.exports = { Users };
