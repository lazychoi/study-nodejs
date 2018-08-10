var http = require('http');
var server = http.createServer();

var port = 3000;

server.listen(port, function(){
    console.log('Webserver is running.');
})

server.on('connection', function(socket){
    var addr = socket.address();
    console.log(`Client is connected. ${addr.address}, ${addr.port}`);
})

server.on('request', function(req, res){
    console.log('Client is requesting....');
    console.dir(req);
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>응답 페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>웹서버에서 받은 응답</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
})


server.on('close', function(){
    console.log('Server is closed.')
})