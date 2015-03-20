'use strict';

var express = require('express');
var controller = require('./serverCall');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.add);
router.post('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;