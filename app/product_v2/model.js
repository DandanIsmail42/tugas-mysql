const sequelize = require('../../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const DaftarMhs = sequelize.define('DaftarMhs', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nim: {
    type: DataTypes.INTEGER
  },
  alamat: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

module.exports = DaftarMhs;