const cron = require('node-cron')
const gd = require('../tasks/getDataFromHN')
require('dotenv').config()

const task = (cron.schedule('59 * * * *', () => {
  console.log('run')
  try {
    gd.getDataFromServer()
  } catch (e) {
    console.log(e)
  }
}, {
  timezone: 'America/Santiago'
}))

task.start()
