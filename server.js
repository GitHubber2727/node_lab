// main js
//var mod = require("./module");
//
//console.log("Hello " + mod.name);
//console.log( mod.emphasize("Grand") );





var http = require("http");
var mod = require("./tasks");

var ourList = mod.tasks;
var randomRandom = Math.floor(Math.random()*4);



http.createServer(function(request, response) {
    response.writeHead(200, { "Content-type": "text/plain"});
    response.write(ourList[randomRandom]);
    response.end();
}) .listen(3000);

