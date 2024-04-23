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
app.get('/customers', customersRouter);
app.post('/customers', customersRouter);
app.get('/customers/:id', customersRouter);
app.put('/customers/:id', customersRouter);
app.delete('/customers/:id', customersRouter);

// Orders routes
app.get('/orders', ordersRouter);
app.post('/orders', ordersRouter);
app.get('/orders/:id', ordersRouter);
app.put('/orders/:id', ordersRouter);
app.delete('/orders/:id', ordersRouter);

module.exports = app;
