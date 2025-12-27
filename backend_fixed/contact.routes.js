const express = require('express');
const router = express.Router();
const contactController = require('./contactcontroller');

router.post('/', contactController.createMessage);
router.get('/', contactController.listMessages);
router.get('/test', contactController.test);

module.exports = router;
