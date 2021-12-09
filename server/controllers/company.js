import Company from "../models/company.js";

export const getCompany = async (req, res) => {
  try {
    const company = await Company.find();
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
    await Company.updateOne({ nit: req.body.nit }, { active: req.body.state });
    res.status(200);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
