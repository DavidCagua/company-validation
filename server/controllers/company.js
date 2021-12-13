import Company from "../models/company.js";
import Document from "../models/document.js";

export const getCompany = async (req, res) => {
  try {
    const company = await Company.find().populate("documents");
    res.status(200).json(company);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createCompany = async (req, res) => {
  try {
    const company = await Company.find();
    console.log(company);
    res.status(200).json(company);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateCompany = async (req, res) => {
  try {
    const company = await Company.findOneAndUpdate(
      { nit: req.body.nit },
      { active: req.body.state },
      { returnOriginal: false }
    );
    res.status(200).json(company);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const uploadDocument = async (req, res) => {
  try {
    const document = new Document();
    document.name = req.body.name;
    document.url = req.body.url;
    document.save().then((result) => {
      Company.findOne({ nit: req.body.company }, (err, company) => {
        if (company) {
          document.company.push(company);
          company.documents.push(document);
          company.save();
          console.log(company);
          res.end();
        }
      });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
