const {join} = require('path')

require('dotenv').config({ path: join(__dirname, '.env') })

const client = process.env.CLIENT
const host = process.env.HOST
const user = process.env.DB_USER
const password = process.env.PASSWORD
const database = process.env.DATABASE

if (!client && !host && !user && !password && !database) {
  throw new UndefinedProperties(
    `client, host, user, password and database must be defined`
  )
}

module.exports = {
  development: {
    client:'sqlite3',
    connection: {filename:'./sqlite/databaseSqlite.db'},
    useNullAsDefault: true
  },

  staging: {
    client:'sqlite3',
    connection: {filename:'./sqlite/databaseSqlite.db'},
    useNullAsDefault: true
  },

  production: {
    client:'sqlite3',
    connection: {filename:'./sqlite/databaseSqlite.db'},
    useNullAsDefault: true
  }

};
