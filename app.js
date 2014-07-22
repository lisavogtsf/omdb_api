var express = require("express")
  request = require('request');

var app = express();

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/search', function(req, res){
  // res.send("search page: " + query);
  var searchRequest = req.query.searchTerm;
  var searchURL = "http://www.omdbapi.com/?s=" + searchRequest;
  request(searchURL, function(error, response, body){
    if (!error){
      // res.send ("response received" + body);  
      // var data = body;
      // res.render("results.ejs", {movieList: data});  
      var data = JSON.parse(body); 
      res.render("results.ejs", {movieList: data.Search});
      // res.send(data);
    }

  });
});

app.listen(3000);
