'use strict';

var express = require('express');
var controller = require('./query');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.add);
router.post('/:id', controller.update);

module.exports = router;