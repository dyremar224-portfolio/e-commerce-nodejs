'use strict'

const {ValidationError} = require('../exceptions/ValidationError');

const joi = async (obj, data) => {
    try {
        return await obj.validateAsync(data, {abortEarly: false});
    } catch (e) {
        throw new ValidationError(e.details);
    }
}

module.exports.joi = joi;
