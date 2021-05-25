const mysql = require('mysql');

/*const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});*/

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "products"
  });
  
  // open the MySQL connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
  module.exports = connection;