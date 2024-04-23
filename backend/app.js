var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// categories routes
var categoriesRouter = require('./routes/categories');

// products routes
var productsRouter = require('./routes/products');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/categories', categoriesRouter);
app.post('/categories', categoriesRouter);
app.get('/categories/:id', categoriesRouter);
app.put('/categories/:id', categoriesRouter);
app.delete('/categories/:id', categoriesRouter);

// Products routers
app.get('/api/products', productsRouter);
app.post('/api/products', productsRouter);
app.get('/api/products/:id', productsRouter);
app.put('/api/products/:id', productsRouter);
app.delete('/api/products/:id', productsRouter);

module.exports = app;
