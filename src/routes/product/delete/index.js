'use strict'

const {$delete} = require('../data');
const {validator} = require('./validator');
const {NotFoundError} = require('../../../../exceptions/NotFoundError');

const router = require('express').Router();

router.delete('/:id', async (req, res, next) => {
    try {
        const vars = await validator({id: parseInt(req.params.id)});
        const result = await $delete([vars.id]);

        if(result.affectedRows === 0) {
            throw new NotFoundError('product not found');
        }

        return res.status(204).end();
    } catch (e) {
        next(e);
    }
});

module.exports = router;
