'use strict';

var express = require('express');
var controller = require('./serverCall');

var router = express.Router();

router.get('/:status', controller.get);
router.post('/:status', controller.post);
router.put('/:status', controller.put);
router.delete('/:status', controller.delete);

module.exports = router;