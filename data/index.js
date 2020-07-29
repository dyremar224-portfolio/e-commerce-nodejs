const mysql = require('mysql2');

const database = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true
});

database.connect(e => {
    if (e) throw e;
    console.log('database connected');
});

module.exports = database;
