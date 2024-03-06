var http = require('http');

http.createserver(function(req, res) {
  res.write("i am alive");
  res.end();
}).listen(8080);
