const mongoose = require("mongoose");
const argon2 = require("argon2");

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

customerSchema.pre("save", async function () {
  try {
    const hashedPassword = await argon2.hash(this.password);
    this.password = hashedPassword;
  } catch (error) {
   
  }
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
