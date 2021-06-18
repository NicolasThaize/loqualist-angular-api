const { Sequelize } = require('sequelize');
const BrandModel = require('./models/brand')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Brand = BrandModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Brand
}
