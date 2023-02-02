import express from "express";
import {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} from "../controller/post.controller.js";
const router = express.Router();
router.route("/api/post").get(getPosts).post(addPost);
router.route("/api/post/:id").put(updatePost);
router.route("/api/del/:id").put(deletePost);

export default router;
