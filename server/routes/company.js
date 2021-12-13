import express from "express";
import {
  getCompany,
  createCompany,
  updateCompany,
  uploadDocument,
} from "../controllers/company.js";
const router = express.Router();

router.get("/", getCompany);
router.post("/", createCompany);
router.put("/", updateCompany);
router.post("/upload", uploadDocument);

export default router;
