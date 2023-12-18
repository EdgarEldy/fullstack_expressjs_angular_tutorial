const express = require('express');
const router = express.Router();

// Initialize database
const db = require('../models');

// Initialize Category and Product models
const Category = db.Category;
const Product = db.Product;

//Exports categories routes
module.exports = router;