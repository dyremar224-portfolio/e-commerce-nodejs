'use strict'

const {edit} = require('../data');
const {validator} = require('./validator');
const {NotFoundError} = require('../../../../exceptions/NotFoundError');

const router = require('express').Router();

router.put('/', async (req, res, next) => {
    try {
        const vars = await validator(req.body);
        const result = await edit([vars.title, vars.description, vars.id]);

        if(result.affectedRows === 0) {
            throw new NotFoundError('product not found');
        }

        return res.status(204).end();
    } catch (e) {
        next(e);
    }
});

module.exports = router;
