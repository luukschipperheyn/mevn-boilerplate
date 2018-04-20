const Post = require('../models/post')

module.exports = {
  create (title, body) {
    return new Post({
      title,
      body
    }).save()
  },
  getById (id) {
    return Post.findById(id)
  },
  listAll (mapId) {
    return Post.find({})
  },
  removeById (id) {
    return Post.remove({_id: id})
  },
  updateById (id, data) {
    return Post.findById(id).then(post => {
      post.title = data.title
      post.body = data.body
      return post.save()
    })
  }
}