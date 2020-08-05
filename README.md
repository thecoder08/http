# HTTP
## What is HTTP?
HTTP is a simple-syntax yet powerful web server developed by thecoder08.
## Installation
Run the command
```shell
npm i @thecoder08/http
```
to install HTTP.
## Require
Require with this code for node.js:
```javascript
var http = require('@thecoder08/http');
```
Require with this code for the browser:
```html
<script src="node_modules/@thecoder08/http/browser.js"></script>
```
## Syntax
### Node.js
```javascript
http.server(port, callback);
```
Where `port` is a number for the port to run the server on.  
Where `callback` is a function with arguments `req`, a url object from the request, `res`, a function that responds to the client, It's syntax is below:
```javascript
res(status, type, data);
```
Where `status` is a number for the response status code.  
Where `type` is the MIME type for the data to respond.  
Where `data` is the data to respond.  
and `redirect`, a function that redirects the client. It's syntax is below:
```javascript
redirect(message, url);
```
Where `message` is a message to tell the client they are redirecting.  
Where `url` is the URL to redirect to.
```javascript
http.secureServer(cert, key, port, callback)
```
Syntax for `secureServer` is the same as that of `server`. The only difference is that `cert` is the SSL certificate for the server, and `key`, is the private key.
```javascript
http.request(options, callback);
```
Where `options` is an object with properties `hostname`, the address of the server to request, `port`, the port of the server to request, and path, the path to request the server.  
Where `callback` is a function with an argument `data`, the data from the server.
### Browser
```javascript
request(url, callback);
```
Where `url` is the URL to request.  
Where `callback` is a function with an argument `data`, the data from the server.
