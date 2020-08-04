var http = require('http');
var https = require('https');
module.exports = {
  secureServer: function(cert, key, port, callback) {
    https.createServer({cert: cert, key: key}, function(req, res) {
      callback(require('url').parse(req.url, true), function(status, type, data) {
        res.writeHead(status, {'access-control-allow-origin': '*', 'content-type': type, 'content-length': data.length});
        res.write(data);
        res.end();
      }, function(message, url) {
        res.writeHead(301, {'access-control-allow-origin': '*', 'content-type': 'text/plain', 'location': url});
        res.write(message);
        res.end();
      });
    }).listen(port);
  },
  server: function(port, callback) {
    http.createServer(function(req, res) {
      callback(require('url').parse(req.url, true), function(status, type, data) {
        res.writeHead(status, {'access-control-allow-origin': '*', 'content-type': type, 'content-length': data.length});
        res.write(data);
        res.end();
      }, function(message, url) {
        res.writeHead(301, {'access-control-allow-origin': '*', 'content-type': 'text/plain', 'location': url});
        res.write(message);
        res.end();
      });
    }).listen(port);
  },
  request: function(options, callback) {
    var req = http.request(options, function(res) {
      res.on('data', function(data) {
        callback(data);
      });
    });
    req.end();
  }
}
