// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// Use the fs module to read the comments.html file and send it as the response.
// The comments.html file is located in the same directory as the comments.js file.
// Don't forget to set the Content-Type to text/html.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('comments.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);