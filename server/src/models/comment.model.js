import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  text: {
    type: String,
  },
  blogId: {
    type: String,
  },
});
export default mongoose.model("Comment", CommentSchema);
