var express = require('express');
var app = express();
var Firebase = require('firebase');
var ref = new Firebase('https://final3780bomapp.firebaseio.com/');
var bodyParser = require('body-parser');


// app.use(express.static('source'));
// app.use(express.static('node_modules/angularfire'));
app.use(express.static('./'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));

app.get('/', function(req, res) {
  ref.once("value", function(snapshot){
    var info = snapshot.val();
    res.send(info);
  })

});

app.post('/', function(req, res) {
  console.log(req.body.info);
  ref.push({'info': req.body.info});
  res.send('success!');
});

app.listen(8000);
console.log('Server started on 8000');