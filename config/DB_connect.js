//setting up mysql connection
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
 connection = mysql.createConnection(
    {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "hamburger_db"
});
}

connection.connect(function(err) {
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId);    
});

module.exports = connection;
//the orm file (Object-relational mapping file) will require this. Which makes a lot of sense.