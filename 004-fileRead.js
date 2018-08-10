var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
    var filename = 'google.png';
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {"Content-Type": "image/png"});
        res.write(data);
        res.end();
    })
});

var host = 'localhost';
var port = 3000;
server.listen(port, host, 50000, function(){
    console.log('웹 서버가 http://%s:%d에서 시작되었습니다.', host, port);
})