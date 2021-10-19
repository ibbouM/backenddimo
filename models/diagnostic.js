const mongoose = require("mongoose");

const diagnosticSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phone:{
      type:String, 
      required:true
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  years: {
    type: String,
    required: true,
  },
  offre:{
      type: Number,
      required:true
  }
});

const Diagnostic = mongoose.model("Diagnostic", diagnosticSchema);
module.exports = Diagnostic;
