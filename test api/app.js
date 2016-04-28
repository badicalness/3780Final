var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route(/Books)
    .get(function(req,res){
        var responseJson = {hello: "This is still my practice API."};
        
        res.json(responseJson);
    }); 
    
app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('This is my practice API!');
});

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});