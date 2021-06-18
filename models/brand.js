module.exports = (sequelize, type) => {
  return sequelize.define('brand', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING,
      allowNull: false
    },
    description: {
      type: type.STRING,
      allowNull: false
    },
  })
}
