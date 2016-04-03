var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  console.log("handled request");
  response.end("Hello World! yay changed2");
}
var www = http.createServer(handleRequest);
www.listen(8080);
console.log("running on port 8080! yay changed2");