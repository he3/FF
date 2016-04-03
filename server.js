<<<<<<< HEAD
"use strict"

const express = require("express");

const PORT = 8080;

const app = express();
app.get("/", function(req, res){
    console.log("Request handled.")
    res.send("Express on"); 
});

app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
=======
var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  console.log("handled request");
  response.end("Hello World! yay changed2");
}
var www = http.createServer(handleRequest);
www.listen(8080);
console.log("running on port 8080! yay changed2");
>>>>>>> a923a44018894acfd44f3e0d89e5f3897206d5a3
