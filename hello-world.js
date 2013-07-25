// reference the http module so we can create a webserver
var http = require("http");
var mongoose = require('mongoose');
mongoose.connect('mongodb://aymenet1:dk1498567@ds063287.mongolab.com:63287/colocation');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    
  
});

// create a server
http.createServer(function(req, res) {
    // on every request, we'll output 'Hello world'
    res.end("Hello world from Cloud9!");
}).listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console