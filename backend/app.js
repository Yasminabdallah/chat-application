var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var migration = require('mysql-migrations');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerController=require('./controllers/register-controller');
var loginController=require('./controllers/login-controller');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
  secret: 'mySecret',
  cookie: { maxAge: 30 * 60 * 1000 }
}))


app.use(function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","OPTIONS,GET,POST,PUT,DELETE")
  res.setHeader("Access-Control-Allow-Headers","Content-Type")
  res.setHeader("Access-Control-Allow-Credentials",true)
  res.setHeader('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
  res.setHeader( 'Access-Control-Max-Age' , 3600)
  res.setHeader('Access-Control-Expose-Headers' ,'X-Pagination-Current-Page');
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);
app.post('/api/register',registerController.register);
app.post('/api/login',loginController.login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
