var express = require("express")
  request = require('request');

var app = express();

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/search', function(req, res){
  // res.send("search page: " + query);
  var query = req.query.searchTerm;
  var searchURL = "http://www.omdbapi.com/?s=" + query;
  request(searchURL, function(error, response, body){
    res.send ("response received");
  })
});

app.listen(3000);
