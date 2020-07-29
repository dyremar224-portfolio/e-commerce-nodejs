class NotFoundError extends Error {
    constructor(detail) {
        super();
        this.title = 'Not Found';
        this.detail = detail;
        this.status = 404;
    }
}

module.exports = {
    NotFoundError
}