var express = require('express')
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var listener = app.listen(3000, function() {
  console.log(listener.address().port);
});

var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/henoheno');
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

const port = process.env.PORT || 4000;

var router = require('./routes/v1/');

app.use('/api/v1', router);
app.listen(port)
