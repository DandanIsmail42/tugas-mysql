const sequelize = require('../../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const DaftarMahasiswa = sequelize.define('DaftarMahasiswa', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nim: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = DaftarMahasiswa;

