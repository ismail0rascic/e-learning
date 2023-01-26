import express from "express";
import { upload, uploadImage } from "../controller/upload.controller.js";
const router = express.Router();
router.post("/upload", uploadImage, upload);

export default router;
