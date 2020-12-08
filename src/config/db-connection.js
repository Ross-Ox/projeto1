
const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'oneclickfood'
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = connection;
