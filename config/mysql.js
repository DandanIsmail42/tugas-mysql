const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_dandan',
    password: 'MGYhwFQR$5&y6VN',
    database: 'freedb_latihan-crud'
});

module.exports = connection;
