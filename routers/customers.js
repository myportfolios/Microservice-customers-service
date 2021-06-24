const express = require('express');
const router = express.Router();

const customersControllers = require('../controllers/customersControllers')

router.post('/customer/create', customersControllers.createCustomer)
router.get('/customer/:id', customersControllers.getCustomer)
router.get('/customers', customersControllers.allCustomers)
router.delete('/customer/:id', customersControllers.deleteCustomer)

module.exports = router;