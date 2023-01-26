import express from "express";
import { changePassword } from "../controller/password.controller.js";
const router = express.Router();
router.route("/api/password/:id").put(changePassword);
export default router;
