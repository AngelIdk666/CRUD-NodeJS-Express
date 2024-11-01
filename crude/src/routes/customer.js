const express = require('express');
const router = express.Router();

// Import the customer controller from the new location
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

module.exports = router;
