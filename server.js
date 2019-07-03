var express = require('express');
var path = require('path');
var app = express();
var port = 5000;
app.get('/', function (req, res) {
    res.send('<html><body><h2>Greate!! You are run the server configure</h2</body></html>');
});
app.get('/API', function (req, res) {
    res.send('<p>API Data</p>');
});
app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Application running on port: " + port);
    }
});