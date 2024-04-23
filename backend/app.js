var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// categories routes
var categoriesRouter = require('./routes/categories');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/api/categories', categoriesRouter);
app.post('/api/categories', categoriesRouter);
app.get('/api/categories/:id', categoriesRouter);
app.put('/api/categories/:id', categoriesRouter);
app.delete('/api/categories/:id', categoriesRouter);

module.exports = app;
