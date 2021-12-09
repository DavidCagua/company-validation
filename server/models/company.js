import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  name: String,
  title: String,
  idType: String,
  nit: {
    type: Number,
    required: true,
  },
  employees: {
    type: Number,
    min: 0,
  },
  logo: String,
  active: { type: Boolean, default: false },
});

const Company = mongoose.model("Company", companySchema);

export default Company;
