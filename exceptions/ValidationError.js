class ValidationError extends Error {
    constructor(errors) {
        super();
        this.title = 'One or more validation errors occurred';
        this.detail = 'validation error';
        this.status = 400;
        this.errors = errors || [];
    }
}

module.exports = {
    ValidationError
}
