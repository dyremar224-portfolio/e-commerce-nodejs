module.exports = (err, req, res) => {
    res.status(err.status || 500).json({
        type: `https://httpstatuses.com/${err.status || 500}`,
        title: err.title || 'Internal Server Error',
        detail: err.detail || err.message,
        instance: req.url,
        status: err.status || 500,
        errors: err.errors || []
    }).end();
};
