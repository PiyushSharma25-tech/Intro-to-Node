 var mysql = require('mysql');

 // create a connection
 var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
 })


 // connect to Mysql
 con.connect(function(err){
    if(err) throw err;
    console.log("Connected To The Database!");

    // Creating a database
    con.query("CREATE DATABASE nodedb",function (err,result){
        if (err) throw err;
        console.log("Database created!")
    })
 });
