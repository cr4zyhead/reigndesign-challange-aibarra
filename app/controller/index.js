const Feeds = require('../models/feed-schema')

function index (req, res) {
  Feeds.find({ is_deleted: false })
    .sort('-created_at')
    .then(feeds => {
      const formatDate = {
        lastDay: '[Yesterday]',
        sameDay: 'h:hh a',
        nextDay: 'MMM DD',
        lastWeek: 'MMM DD',
        nextWeek: 'MMM DD',
        sameElse: 'MMM DD' }

      res.render('index', { title: 'HN Feeds', feeds, formatDate })
    })
    .catch(e => {
      console.log(e)
    })
}
module.exports = { index }
