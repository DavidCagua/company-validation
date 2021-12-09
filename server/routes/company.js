import express from "express";
import {
  getCompany,
  createCompany,
  updateCompany,
} from "../controllers/company.js";
const router = express.Router();

router.get("/", getCompany);
router.post("/", createCompany);
router.put("/", updateCompany);

export default router;
