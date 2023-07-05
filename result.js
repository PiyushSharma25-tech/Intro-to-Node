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

    // Result Messages on getting values
    var sql = "INSERT INTO customers (name,email) VALUES ('Piyush', 'piyush@piyush.com)?";
    con.query(sql, function (err,result) {
       //  if (err) throw err;
        console.log(result);
    });
   
 });