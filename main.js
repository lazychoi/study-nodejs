var http = require('http');
var express = require('express');

var app = express();
app.use(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.end("Hello, express");
})
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(req, res){
    console.log('Express Server is running.');
})