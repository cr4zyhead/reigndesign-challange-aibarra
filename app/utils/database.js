const mongoose = require('mongoose')
const dotEnv = require('dotenv')
dotEnv.config()
module.exports = class Database {
  constructor () {
    this.uri = process.env.DB_URI
  }

  connect () {
    try {
      mongoose.connect(this.uri, { useNewUrlParser: true })
      this.db = mongoose.connection
      console.log('DB connected')
    } catch (e) {
      console.log(e)
    }
  }

  closeConnection () {
    return new Promise((resolve) => {
      console.log('Closing connection')
      mongoose.connection.close(resolve)
    })
  }
}
