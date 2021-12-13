import mongoose from "mongoose";
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  name: String,
  url: String,
  company: [{ type: Schema.Types.ObjectId, ref: "Company" }],
});

const Document = mongoose.model("Document", documentSchema);

export default Document;
