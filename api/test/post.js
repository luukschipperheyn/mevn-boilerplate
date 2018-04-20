process.env.NODE_ENV = 'test'

const mongoose = require("mongoose")
const Post = require('../src/models/post')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/server')
const should = chai.should()
const expect = chai.expect

chai.use(chaiHttp)

describe('Posts', () => {
  let savedPosts

  beforeEach(() => {
    const posts = [
      {
        title: 'hoi',
        body: 'foo'
      },  
      {
        title: 'hallo',
        body: 'bar'
      }
    ]
    
    return Post.remove({})
      .then(() =>  Promise.all(posts.map(post => new Post(post).save())).then(posts => {
        savedPosts = posts
      }))
  })
    
  describe('/GET post', () => {
    it('it should GET all the posts', (done) => {
      chai.request(server)
        .get('/posts')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(savedPosts.length)
          done()
        })
    })
  })
  
  describe('/GET/:id post', () => {
    it('should GET an post by the given id', done => {
      const postId = savedPosts[0].id
      chai.request(server)
        .get('/posts/' + postId)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('title').eql(savedPosts[0].title)
          res.body.should.have.property('body').eql(savedPosts[0].body)
          res.body.should.have.property('_id').eql(savedPosts[0].id)
          done()
        })
    })
  })
   
  describe('/POST post', () => {
    it('should post a post', done => {
      const post = {
        title: 'hey',
        body: 'blablabla'
      }
      chai.request(server)
        .post('/posts')
        .send(post)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('title').eql(post.title)
          res.body.should.have.property('body').eql(post.body)
          res.body.should.have.property('_id')
          
          Post.findById(res.body._id).then(postedPost => {
            postedPost.should.be.a('object')
            postedPost.should.have.property('title').eql(post.title)
            postedPost.should.have.property('body').eql(post.body)
            postedPost.should.have.property('id').eql(res.body._id)
            done()
          })
        })
    })
  })
    
  describe('/PUT post', () => {
    const post = {
      title: 'new title',
      body: 'new body'
    }
    it('it should PUT post: happy path', (done) => {
      chai.request(server)
        .put('/posts/' + savedPosts[0].id)
        .send(post)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('title').eql(post.title)
          res.body.should.have.property('body').eql(post.body)
          res.body.should.have.property('_id').eql(savedPosts[0].id)
          
          Post.findById(res.body._id).then(updatedPost => {
            updatedPost.should.be.a('object')
            updatedPost.should.have.property('title').eql(post.title)
            updatedPost.should.have.property('body').eql(post.body)
            updatedPost.should.have.property('id').eql(res.body._id)
            done()
          })
        })
    })
  })
  
  describe('/DELETE post', () => {
    it('it should DELETE post: happy path', (done) => {
      chai.request(server)
        .delete('/posts/' + savedPosts[0].id)
        .end((err, res) => {
          res.should.have.status(200)
          Post.findById(savedPosts[0].id).then(post => {
            expect(post).to.be.null
            done()
          }, error => {
            done(error)
          })
        })
    })
  })
})
