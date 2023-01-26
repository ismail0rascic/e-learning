import express from "express";
import {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} from "../controller/post.controller.js";
const router = express.Router();
router.route("/api/post").get(getPosts).post(addPost);
router.route("/api/post/:id").put(updatePost).delete(deletePost);

export default router;
