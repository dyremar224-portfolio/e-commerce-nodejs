'use strict'

const router = require('express').Router();

const get = require('./get/index');
const getById = require('./getById/index');
const post = require('./post/index');
router.use('/', get);
router.use('/', getById);
router.use('/', post);
module.exports = router;
