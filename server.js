const clientId = `05449736a72133433d33`
const secretKey = `3643fcfdf9c6ea7a80f04bef6cef10ed44dd491b`

var express = require("express"),
    app = express(),
    port = process.env.PORT || 5000;

var githubOAuth = require('github-oauth')({
  githubClient: clientId,
  githubSecret: secretKey,
  baseURL: 'http://localhost:' + port,
  loginURI: '/auth/github',
  callbackURI: '/auth/github/callback'
})

app.get("/auth/github", function(req, res){
  console.log("started oauth");
  return githubOAuth.login(req, res);
});

app.get("/auth/github/callback", function(req, res){
  console.log("received callback");
  return githubOAuth.callback(req, res);
});

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err)
})

githubOAuth.on('token', function(token, serverResponse) {
  serverResponse.end(JSON.stringify(token))
})

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});