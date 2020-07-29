'use strict'

const {getAll} = require('../data');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
    const result = await getAll();

    return res.status(200).json({
        items: result,
        count: result.length
    }).end();
});

module.exports = router;
