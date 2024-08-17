const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const BlogPost = mongoose.model("BlogPost", schema);

module.exports = BlogPost;

