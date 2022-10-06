const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'freedb_latihan-crud',
    host: 'sql.freedb.tech',
    username: 'freedb_dandan',
    password: 'MGYhwFQR$5&y6VN',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = sequelize;