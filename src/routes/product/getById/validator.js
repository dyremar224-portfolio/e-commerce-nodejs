'use strict'

const {joi} = require('../../../../lib/joi');

const Joi = require('joi');

module.exports.validator = (data) => {
    return joi(Joi.object({
        id: Joi.number().integer().positive().required()
    }), data);
}
