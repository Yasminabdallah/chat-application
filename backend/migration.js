var mysql      = require('mysql');
var migration = require('mysql-migrations');


var connection = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : '01276499724',
    database : 'realtimechat'
  });
  

  //to create migrations 
  migration.init(connection, __dirname + '/migrations');
