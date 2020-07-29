'use strict'

const router = require('express').Router();

const get = require('./get/index');
router.use('/', get);
module.exports = router;
