const controller = require("../controllers/post")

function onError(res, message) {
  res.status(400).send({ message })
}

module.exports = {
  delete: [
    {
      pattern: '/posts/:id',
      handler (req, res) {
        const id = req.params.id
        controller.removeById(id)
          .then(post => res.send(post))
          .catch(onError.bind(this, res))
      }
    }
  ],
  get: [
    {
      pattern: '/posts',
      handler (req, res) {
        controller.listAll()
          .then(posts => res.send(posts))
          .catch(onError.bind(this, res))
      }
    },
    {
      pattern: '/posts/:id',
      handler (req, res) {
        const id = req.params.id
        controller.getById(id)
          .then(post => res.send(post))
          .catch(onError.bind(this, res))
      }
    }
  ],
  post: [
    {
      pattern: '/posts',
      handler (req, res) {
        const title = req.body.title
        const body = req.body.body
        controller.create(title, body)
          .then(post => res.send(post))
          .catch(onError.bind(this, res))
      }
    }
  ],
  put: [
    {
      pattern: '/posts/:id',
      handler (req, res) {
        const id = req.params.id
        const data = {
          title: req.body.title,
          body: req.body.body
        }
        controller.updateById(id, data)
          .then(post => res.send(post))
          .catch(onError.bind(this, res))
      }
    }
  ]
}

