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

    // Alter a Table
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql , function (err,result) {
       //  if (err) throw err;
        console.log(" Our Table has been Altered!");
    });

    
 });