var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/resources', function(req, res) {
  console.log('GET /resource');

  res.contentType('application/json');
  res.status(200).send(JSON.stringify({results:'GET json'}));
});
app.options('/resources', function(req,res) {
  console.log('OPTIONS /');

  res.status(200).send(JSON.stringify({results:'OPTIONS json'}));
});

var port = 5000;
app.listen(port);
console.log('Server listening on port ' + port);
