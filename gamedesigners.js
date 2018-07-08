var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listdesigners', function (req, res) {
   fs.readFile( __dirname + "/" + "gamedesigners.json", 'utf8', function (err, data) {
       console.log(data);
       res.end(data);
   });
})

app.get('/:id', function (req, res) {
  fs.readFile( __dirname + "/" + "gamedesigners.json", 'utf8', function (err, data) {
     var designers = JSON.parse( data );
     var designer = designers["Designer" + req.params.id] 
     console.log( designer );
     res.end(JSON.stringify(designer));
  });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Game Designer App listening at http://%s:%s", host, port)

})