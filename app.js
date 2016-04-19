var express = require('express');


var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('welcome to my API sir!');
    
});

app.listen(port, function(){
    console.log('gulp is running my app on PORT:' + port);
});