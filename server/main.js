var express = require('express');

var app = new express();

/**
 * routing in Express
 */
// app.get('/', (req, res)=> {
//     res.render('./../app/index.html');
// });
app.get('/', function(req, res) {
    res.render('./../app/index.html');
});

let port = 9090;
app.listen(port);