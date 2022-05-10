const mongoose = require("mongoose");

const primeSchema = new mongoose.Schema(
  {
    limit: {
      type: Number,
      required: true,
    },
    result: {
      type: Array,
      required: true,
    },
    sum: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Primes", primeSchema);
