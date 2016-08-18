var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "./");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(8080);
console.log("The server is now running on port 8080");
