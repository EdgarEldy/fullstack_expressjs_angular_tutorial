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

module.exports = router;