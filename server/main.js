var express = require('express');
var app = express();
var path = require('path');

// var app = new express();

/**
 * routing in Express
 */
let port = 9090;

// app.get('/', (req, res)=> {
    // res.render('./../app/index.ejs', {});
    // res.send('Express', {});
// })


// viewed at http://localhost:9090
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    // res.sendFile('./../app/index.html'); // path must be absolute
})
.use(express.static(__dirname + '/../app')) // Serve static contents
.listen(port);


// app.get('/', function(req, res) {
    // res.render('./../app/index.html');
// });
// .listen(port);  