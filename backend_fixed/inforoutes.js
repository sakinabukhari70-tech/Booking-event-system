const express = require('express');
const router = express.Router();
const infoController = require('./controllerinfo');

router.get('/:slug', infoController.getPage);
router.post('/', infoController.createOrUpdatePage);
router.get('/', infoController.listPages);
router.get('/test', infoController.test);

module.exports = router;
