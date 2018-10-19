const express = require('express')
const router = express.Router()
const controller = require('../controller/feed_controller')

/* GET home page. */

router.get('/', controller.get)
router.post('/', controller.createFeed)

module.exports = router
