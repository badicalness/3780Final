var express = require('express');
var app = express();
var Firebase = require('firebase');
var ref = new Firebase('https://final3780bomapp.firebaseio.com/data');

app.use(express.static('source'));
app.use(express.static('node_modules/angular'));

app.get('/data', function(req, res) {
  ref.once("value", function(snapshot){
    var data = snapshot.val();
    res.send(data);
  })

});

app.post('/data', function(req, res) {
  console.log(req.body.data);
  ref.push({'data': req.body.data});
  res.send('success!');
});


