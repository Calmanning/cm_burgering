//setting up mysql connection
const mysql = require('mysql');

const connection = mysql.createConnection(
    {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "hamburger_db"
});

connection.connect(function(err) {
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId);    
});

module.exports = connection;
//the orm file (Object-relational mapping file) will require this. Which makes a lot of sense.