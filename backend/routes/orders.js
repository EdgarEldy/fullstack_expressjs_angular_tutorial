const express = require('express');
const router = express.Router();

// Initialize database and required models
const db = require('../models');

const Customer = db.Customer;
const Product = db.Product;
const Order = db.Order;

module.exports = router;