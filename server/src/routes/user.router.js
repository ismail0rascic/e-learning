import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  getAllUsers,
  deleteUserAdmin,
  addCourse,
  addCompleted,
  removeCourse,
} from "../controller/user.controller.js";
const router = express.Router();

router.route("/api/users").get(getAllUsers);
router
  .route("/api/users/:id")
  .get(getUsers)
  .put(updateUser)
  .delete(deleteUserAdmin);
router.route("/api/delete/:id").put(deleteUser);
router.route("/api/course").put(addCourse);
router.route("/api/remove").put(removeCourse);
router.route("/api/completed").put(addCompleted);

export default router;
