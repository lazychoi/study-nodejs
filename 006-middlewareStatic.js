var http = require('http');
var express = require('express');
var app = express();

var static = require('serve-static');
var path = require('path');

app.use(static(path.join(__dirname, 'public')));

http.createServer(app).listen(3000, function(){
    console.log('Express Server is running.');
});