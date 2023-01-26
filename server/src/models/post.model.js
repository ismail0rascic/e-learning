import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  level: {
    type: String,
  },
  duration: {
    type: String,
  },
  image: {
    type: String,
  },
});
export default mongoose.model("Post", PostSchema);
