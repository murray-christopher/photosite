const config = require('../config/config')
const { Pool } = require('pg')
const connect = config.connectString

const pool = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
})

module.exports = {
  query(query) {
    pool.query(query, (err, res) => {
      if (err) {
        throw err
        console.log("query error", err)
      }
      return res
    })
  }
}
