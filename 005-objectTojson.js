var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res, next){
    var person = {name:'소녀시대', age:20};
    var personStr = JSON.stringify(person);
    res.send(personStr);
})

http.createServer(app).listen(3000, function(){
    console.log('Express Server is running.');
});