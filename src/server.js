const http = require('http');
const request = require('request');
require('dotenv').config();

const clientId = `05449736a72133433d33`
const secretKey = `d0115c0e09c202d8e50ff6260e374294c187ab5a`

console.log('Started server on port 5000');
console.log('ID:', clientId);
console.log('secret key:', secretKey);



http.createServer((req, res) => {
  var code = req.url.split("=")[1];
  if (code) {
    request.post('https://github.com/login/oauth/access_token', {
      form: {
        client_id: clientId,
        client_secret: secretKey,
        code: code
      }
    }, (err, r, body) => {
      res.writeHead(301, {
        'Location': 'http://localhost:3000?' + body
      });
      res.end();
    })
    
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(5000);