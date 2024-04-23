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

// customers routes
var customersRouter = require('./routes/customers');

// orders routes
var ordersRouter = require('./routes/orders');

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

// Products routers
app.get('/api/products', productsRouter);
app.post('/api/products', productsRouter);
app.get('/api/products/:id', productsRouter);
app.put('/api/products/:id', productsRouter);
app.delete('/api/products/:id', productsRouter);

// Customers routes
app.get('/api/customers', customersRouter);
app.post('/api/customers', customersRouter);
app.get('/api/customers/:id', customersRouter);
app.put('/api/customers/:id', customersRouter);
app.delete('/api/customers/:id', customersRouter);

// Orders routes
app.get('/api/orders', ordersRouter);
app.post('/api/orders', ordersRouter);
app.get('/api/orders/:id', ordersRouter);
app.put('/api/orders/:id', ordersRouter);
app.delete('/api/orders/:id', ordersRouter);

module.exports = app;
