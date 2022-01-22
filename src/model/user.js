const mongoose = require("mongoose");

const Users = mongoose.model("User", {
  id: {
    type: String,
    required: false,
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
// module.exports = { Users };
module.exports = { Users };
