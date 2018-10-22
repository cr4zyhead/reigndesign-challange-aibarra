/**
 * get a list of feeds
 * @param req
 * @param res
 * @returns {*|JSON|Promise<any>}
 */

const Feed = require('../models/feed-schema')
const List = require('collections/list')

function get (req, res) {
  return Feed
    .find({ is_deleted: false })
    .then(feeds => (
      res.status(200).json(feeds)
    ))
    .catch(e => {
      res.status(404).json({ message: 'not found', error: e })
    })
}

function insertFeeds (req, res) {
  let feeds = req.body.feeds
  if (!Array.isArray(feeds)) feeds = [feeds]
  let arr = formatFeed(feeds)

  Feed.insertMany(arr.toArray(), { ordered: false })
    .then(results => res.status(201).json(results))
    .catch(err => res.status(404).json(err.message))
}

function formatFeed (feeds) {
  let feedsFormatted = new List()
  let x = Object.create(null)
  try {
    feeds.forEach(feed => {
      x = {
        objectID: feed.objectID,
        title: feed.story_title || feed.title,
        url: feed.story_url || feed.url || null,
        author: feed.author,
        created_at: new Date(feed.created_at),
        is_deleted: false
      }
      feedsFormatted.add(x)
    })
  } catch (e) {
    console.log('')
  }

  return feedsFormatted
}

async function deleteFeed (req, res) {
  const id = req.params.id
  const query = { objectID: id }

  try {
    const op = await Feed.findOneAndUpdate(query, { $set: { is_deleted: true } })
    if (op) {
      res.sendStatus(200).json({ message: 'feed successfully deleted' })
    } else {
      res.sendStatus(401).json({ message: 'error not deleted' })
    }
  } catch (e) {

  }
}

module.exports = { get, insertFeeds, deleteFeed }
