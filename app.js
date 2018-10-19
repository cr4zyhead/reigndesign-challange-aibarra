const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./app/routes/index');
const feedRouter =require('./app/routes/feed')
require('dotenv').config()
const path=require('path');
const db=require('./app/utils/database')


const app = express();

// init db
const dbConnection=new db()
dbConnection.connect()

//init task
const t =require('./app/cronojob')

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
console.log(path.join(__dirname, './app/views'))
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './app/public')));

const moment = require('moment');
moment().format();
app.locals.moment = moment;

app.use('/', indexRouter);
app.use('/api/feeds',feedRouter)

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
