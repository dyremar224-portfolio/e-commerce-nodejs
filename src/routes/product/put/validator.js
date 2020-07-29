'use strict'

const {joi} = require('../../../../lib/joi');

const Joi = require('joi');

module.exports.validator = (data) => {
    return joi(Joi.object({
        id: Joi.number().integer().positive().required(),
        title: Joi.string().trim().min(4).max(64).required(),
        description: Joi.string().trim().min(16).max(2048).required()
    }), data);
}
