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

// Create a new product
router.post('/products', async (req, res, next) => {
    // Create product object
    const product = {
        category_id: req.body.category_id,
        product_name: req.body.product_name,
        unit_price: req.body.unit_price
    };

    // Save a new product
    Product.create(product)
        .then((data) => {
            res.send({
                message: product.product_name + ' has been created successfully !'
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error while creating product !'
            });
        })
});

//Exports categories routes
module.exports = router;