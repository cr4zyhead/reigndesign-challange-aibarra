const axios = require('axios')
require('dotenv').config()

async function getDataFromServer () {
  const uri = process.env.API_URI_HN
  try {
    const res = await axios.get(uri)
    const hits = await res.data.hits
    await axios.post(process.env.API_URI_APP, { feeds: hits })
  } catch (e) {
    Promise.reject(e)
  }
}
module.exports = { getDataFromServer }
