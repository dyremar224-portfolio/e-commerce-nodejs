'use strict'

const router = require('express').Router();

const get = require('./get/index');
const getById = require('./getById/index');
router.use('/', get);
router.use('/', getById);
module.exports = router;
