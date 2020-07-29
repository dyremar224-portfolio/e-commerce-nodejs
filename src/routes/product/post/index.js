'use strict'

const {create} = require('../data');
const {validator} = require('./validator');

const router = require('express').Router();

router.post('/', async (req, res, next) => {
    try {
        const vars = await validator(req.body);
        const result = await create([vars.title, vars.description]);
        return res.status(201).json({
            id: result.insertId
        }).end();
    } catch (e) {
        next(e);
    }
});

module.exports = router;
