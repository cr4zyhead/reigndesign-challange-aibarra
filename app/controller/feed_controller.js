/**
 * get a list of feeds
 * @param req
 * @param res
 * @returns {*|JSON|Promise<any>}
 */

const Feed = require('../models/feed-schema')
var List = require('collections/list')

function get (req, res) {
  return Feed
    .find({ deleted_at: null })
    .then(feeds => (
      res.status(200).json(feeds)
    ))
    .catch(e => {
      res.status(401).json({ message: 'not found', error: e })
    })
}

async function createFeed (req, res) {
  let feeds = req.body.feeds

  if (!Array.isArray(feeds)) {
    feeds = [feeds]
  }
  let feedsArray = new List()
  feeds.forEach(feed => {
    const idf = feed.objectID

    if (idf) {
      const element = {
        objectID: parseInt(idf, 10),
        title: feed.title || feed.story_title,
        url: feed.url || feed.story_url,
        author: feed.author,
        created_at: new Date(feed.created_at)
      }
      feedsArray.add(element)
    }
  })
  feedsArray.map(feed => {
    Feed.find({ objectID: feed.objectID })
      .then(res => {
        if (!res) {
          const f = new Feed(
            { objectID: feed.objectID,
              title: feed.title,
              url: feed.url,
              author: feed.author,
              created_at: feed.created_at })
          f.save()
            .then(r => {
              console.log('saved')
            })
            .catch(e => {
              console.log(e)
            })
        } else {
          console.log('exist')
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
}

module.exports = { get, createFeed }
