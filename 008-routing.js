var http = require('http');
var express = require('express');
var static = require('serve-static');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// 라우터 객체 참조
var router = express.Router();

// 라우팅 함수 등록
router.route('/login').post(function(req, res){
    console.log('/login 라우팅 함수에서 받음.');
    var paramId = req.body.id;
    var paramPassword = req.body.password;

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.write("<h1>서버에서 로그인 응답</h1>");
    res.write("<div><p>" + paramId + "</p></div>");
    res.write("<div><p>" + paramPassword + "</p></div>");
    res.end();
});

// 라우터 객체를 app 객체에 등록
app.use('/', router);

http.createServer(app).listen(3000,function(){
    console.log('Express Server is running.');
})