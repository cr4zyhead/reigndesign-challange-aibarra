const express = require('express')
const router = express.Router()
const controller = require('../controller/feed_controller')

/* GET home page. */

router.get('/', controller.get)
router.post('/', controller.insertFeeds)
router.delete('/:id', controller.deleteFeed)

module.exports = router
