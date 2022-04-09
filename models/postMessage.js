import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name:String,
  creator: String,
  tags: [String],
  selectedFile: String, //for image
  likes: {
    type: [String], //object because additional info to be passed
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
