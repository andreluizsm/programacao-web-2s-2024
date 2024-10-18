const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.getIndexView);
router.post('/dados', formController.postDados);

module.exports = router;

