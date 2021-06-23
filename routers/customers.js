const express = require('express');
const router = express.Router();

const customersControllers = require('../controllers/customersControllers')

router.get('/', customersControllers.getMethod)

module.exports = router;