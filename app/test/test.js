/* eslint-env mocha */
let chai = require('chai')
let chaiHttp = require('chai-http')
chai.should()
const Feed = require('../models/feed-schema')

const localhost = 'http://localhost:3000'

describe('Feed', () => {
  beforeEach((done) => {
    Feed.remove({}, err => {
      if (err) {
        console.log(err.stack)
      }
      done()
    })
  })
})

chai.use(chaiHttp)
describe('/GET feeds', () => {
  it('it should GET all the feeds from db', (done) => {
    chai.request(localhost)
      .get('/api/feeds')
      .end((err, res) => {
        if (err) {
          console.log(err.stack)
        }
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })
})

describe('/POST feed', () => {
  it('it should POST one feed to the db', (done) => {
    let objectID = 111
    let title = 'test'
    let url = 'test'
    let author = 'test'
    let createdAt = Date.now()
    let isDeleted = false
    const feed = { objectID, title, url, author, created_at: createdAt, is_deleted: isDeleted }
    chai.request(localhost)
      .post('/api/feeds')
      .send(feed)
      .end((err, res) => {
        if (err) {
          console.log(err.stack)
        }
        res.should.have.status(201)
        res.body.should.be.a('array')
        done()
      })
  })
})
/*

describe('/DELETE/:id feed', () => {
  it('it should DELETE a feed given the id', (done) => {
    let objectID = 1111111111
    let title = 'test'
    let url = 'test'
    let author = 'test'
    let createdAt = Date.now()
    let isDeleted = false

    let feed = new Feed({
      objectID: parseInt(objectID, 10),
      title: title,
      url: url,
      author: author,
      created_at: createdAt,
      is_deleted: isDeleted
    })
    feed
      .save()
      .then(() => {
        chai.request(localhost)
          .delete('/api/feeds/' + feed.objectId)
          .send(feed)
          .end((err, res) => {
            if (err) {
              console.log(err.stack)
            }
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('feed successfully deleted!')
            done()
          })
      })
  })
})
*/
