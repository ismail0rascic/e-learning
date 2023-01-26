import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  image: { type: String },
  role: { type: String, default: "student" },
  active: { type: Boolean, default: false },
  courses: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
  completed: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
});
export default mongoose.model("User", UserSchema);
