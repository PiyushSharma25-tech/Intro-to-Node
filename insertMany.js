var mysql = require('mysql');

 // create a connection
 var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb",
 });

// connect to Mysql
con.connect(function(err){
    if (err) throw err;
    console.log("Connected To The Database!");

    // Insert a many in a Table
    var sql = "INSERT INTO customers (name,email) VALUES ?";
    var values = [
       ['Piyush', 'piyush@piyush.com'],
       ['Tushar', 'tushar@tushar.com'],
       ['Deepak', 'deepak@deepak.com'],
    ]
    con.query(sql ,[values], function (err,result) {
       //  if (err) throw err;
        console.log("Records Inserted: "+ result.affectedRows);
    });
 });