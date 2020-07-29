'use strict'

const {getById} = require('../data');
const {validator} = require('./validator');
const {NotFoundError} = require('../../../../exceptions/NotFoundError');

const router = require('express').Router();

router.get('/:id', async (req, res, next) => {
    try {
        const vars = await validator({id: parseInt(req.params.id)});
        const result = await getById([vars.id]);

        if(result.length <= 0) {
            throw new NotFoundError('product not found');
        }

        return res.status(200).json(result[0]).end();
    } catch (e) {
        next(e);
    }
});

module.exports = router;
