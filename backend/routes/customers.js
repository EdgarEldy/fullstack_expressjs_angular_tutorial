const express = require('express');
const router = express.Router();

const db = require('../models');
const Customer = db.Customer;

// Exports customers routes
module.exports = router;