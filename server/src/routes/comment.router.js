import express from "express";
import { getComments, addComment } from "../controller/comment.controller.js";
const router = express.Router();
router.route("/api/comment").post(addComment);
router.route("/api/comment/:id").get(getComments);

export default router;
