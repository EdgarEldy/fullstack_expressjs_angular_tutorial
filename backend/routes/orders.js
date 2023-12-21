const express = require('express');
const router = express.Router();

// Initialize database and required models
const db = require('../models');

const Customer = db.Customer;
const Product = db.Product;
const Order = db.Order;

// Get all orders with customers and products api route
router.get('/orders', async (req, res, next) => {
    const orders = await Order.findAll({
        include: [
            {
                model: Customer,
                required: true
            },
            {
                model: Product,
                required: true
            }
        ]
    });

    return res.json(orders);
});

// Add a new order
router.post('/orders', async (req, res, next) => {
    // Create product object
    const order = {
        customer_id: req.body.customer_id,
        product_id: req.body.product_id,
        qty: req.body.qty,
        total: req.body.total
    };

    // Save a new order
    Order.create(order)
        .then((data) => {
            res.send({
                message: 'Order has been created successfully !'
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error while creating order !'
            });
        })
});


module.exports = router;