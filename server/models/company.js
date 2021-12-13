import mongoose from "mongoose";
const Schema = mongoose.Schema;
const companySchema = new Schema({
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
  documents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Document",
    },
  ],
});

const Company = mongoose.model("Company", companySchema);

export default Company;
