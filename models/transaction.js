const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// transaction collection model from budget database used in routes directory & server.js.
// name - stores name of transaction
// value - stores amount fo transaction
// date - autopopulated date of transaction
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
