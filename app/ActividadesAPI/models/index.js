const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'

const config = require('../config/database.json')[env]
config.database = process.env.DB_SECOND_CIRCLE
config.username = process.env.USER_DB_SECOND_CIRCLE
config.password = process.env.PSS_DB_SECOND_CIRCLE
config.host = process.env.DB_URL_SECOND_CIRCLE
config.port = process.env.DB_PORT_SECOND_CIRCLE
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0 && (file !== basename && file.slice(-3) === '.js'))
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = async (ctx, next) => {
  ctx.app.db = db
  await next()
}