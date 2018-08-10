var http = require('http');
var express = require('express');
var app = express();
var static = require('serve-static');
var path = require('path');

app.use(static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    var userAgent = req.header('User-Agent');
    var paramName = req.body.id || req.query.id;

    res.send(`<h3>서버에서 응답. User-Agent : ${userAgent} </h3>
              <h3>Param Id : ${paramName}</h3>`);
})

http.createServer(app).listen(3000, function(){
    console.log('Express Server is running.');
});