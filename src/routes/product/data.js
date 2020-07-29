const {query} = require('../../../data/sql');

module.exports = {
    getAll: () => {
        const sql = 'SELECT * FROM products LIMIT 501';
        return query(sql);
    },
    getById: (values) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        return query(sql, values);
    },
    create: (values) => {
        const sql = 'INSERT INTO products (title, description) VALUE (?, ?)';
        return query(sql, values);
    },
}
