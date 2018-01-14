var express = require('express');
var app = express();
var router = require('./utilities/routes.js');
var path    = require("path");
app.use(express.static(__dirname + '/template')); // Para que busque en esa carpeta el .html
app.use(express.static(__dirname + '/static'));
router(app);

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
