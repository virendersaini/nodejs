var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');

var app = express();


// socket.io code

var server = require('http').Server(app);
var io = require('socket.io')(server);
//server.listen(3322);
//app.get('/', function (req, res) {
//  res.sendfile(__dirname + '/index.html');
//});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
    socket.on('typing', function (msg) {
     
      io.emit('typing', msg);
       console.log(msg);
    });
  //console.log('a user connected');
  socket.on('disconnect', function(){
   // console.log('user disconnected');
  });
  

});
server.listen(7878, function(){
  console.log('listening on *:7878');
});
  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);

//app.set('layout', 'admin/layout/layout');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
