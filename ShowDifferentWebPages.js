var http = require('http'); // created a server http for request
var fs = require('fs'); // reading the file from the server
var url = require('url'); // reading the url 

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "."+ q.pathname;
    if(filename == './') { //provided the condition for showing the localhost
        filename= './index'; // showing index whenever localhost is called
    }
    filename = filename +".html";
    fs.readFile(filename, function(err, data) {
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        console.log("...Incoming Request: " + req.url); //create  server control message
        return res.end();
    })
}).listen(8000);

console.log("Server Listening on 8080") //create  server control message


//http://localhost:8000/