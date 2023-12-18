const express = require('express');
const router = express.Router();

// Initialize database
const db = require('../models');

// Initialize Category and Product models
const Category = db.Category;
const Product = db.Product;

// Get products with their categories api
router.get('/products', async (req, res, next) => {
    const products = await Product.findAll({
        include: [{
            model: Category,
            required: true
        }]
    });

    return res.json(products);
});

//Exports categories routes
module.exports = router;