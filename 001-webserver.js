var http = require('http');

// 웹 서버 객체를 만듦
var server = http.createServer();

// 웹 서버 시작하고 3000번 포트에서 대기함
var port = 3000;
server.listen(3000, function(){
    console.log('웹 서버가 %d 포트에서 시작되었습니다.', port);
})