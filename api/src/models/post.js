const mongoose = require('mongoose')
const Schema = mongoose.Schema

var PostSchema = new Schema({
  title: String,
  body: String
})

var Post = mongoose.model("Post", PostSchema)
module.exports = Post
