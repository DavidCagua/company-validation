import express from "express";
import { getCompany, createCompany } from "../controllers/company.js";
const router = express.Router();

router.get("/", getCompany);
router.post("/", createCompany);

export default router;
