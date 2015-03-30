var Crawler = require('crawler');
var express = require('express');
var url     = require('url');

var app = express();

var server = app.listen(process.env.PORT, function(){
    console.log("Server started...");
});

// create a server
/*http.createServer(function(req, res) {
    // on every request, we'll output 'Hello world'
    //res.end("Habs stink without Price!");
}).listen(process.env.PORT, process.env.IP); // listen on the process.env.PORT and process.env.IP environment variables*/

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function(req, res) {
    res.send('Hi!');
});

app.get('/crawl', function(req, res) {
    
    console.log("Incoming request");
    
    var c = new Crawler({
        maxConnections : 10,
        
        // This will be called for each crawled page
        callback : function (error, result, $) { // $ is Cheerio by default
            
            res.send($('body').html());
        }
    });
    
    // Queue just one URL, with default callback
    c.queue(req.query.url);
});
