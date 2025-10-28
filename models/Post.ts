import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: Object, required: true }, // Editor.js OutputData JSON
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;
