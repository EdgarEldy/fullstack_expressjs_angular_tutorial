const express = require('express');
const router = express.Router();

// Initialize database
const db = require('../models');

// Initialize Category and Product models
const Category = db.Category;
const Product = db.Product;

// Get products with their categories api
router.get('/api/products', async (req, res, next) => {
    const products = await Product.findAll({
        include: [{
            model: Category,
            required: true
        }]
    });

    return res.json(products);
});

// Create a new product
router.post('/api/products', async (req, res, next) => {
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

// Get product by id
router.get('/api/products/:id', (req, res, next) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "Can not found product with id " + id
                });
            } else res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: 'Product not found'
            });
        });
});

// Update a product
router.put('/api/products/:id', async (req, res, next) => {

    const id = req.params.id;

    await Product.update(req.body, {
        where: {
            id: id
        }
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update product with id=${id} !`
                });
            } else res.send({
                message: 'Product has been updated successfully !'
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error while updating product !'
            });
        });

});

// Remove a product
router.delete('/api/products/:id', (req, res, next) => {

    const id = req.params.id;

    Product.destroy({
        where: {
            id: id
        }
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete product with id = ${id}. Product was not found!`
                });
            } else res.status(201).send({
                message: 'Product was deleted successfully!'
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: 'Error while removing product !'
            });
        });
});

//Exports products routes
module.exports = router;