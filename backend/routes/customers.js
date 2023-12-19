const express = require('express');
const router = express.Router();

const db = require('../models');
const Customer = db.Customer;

// Get all customers api
router.get('/customers', async (req, res, next) => {
    const customers = await Customer.findAll();
    return res.json(customers);
});

// Exports customers routes
module.exports = router;