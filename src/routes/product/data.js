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
    edit: (values) => {
        const sql = 'UPDATE products SET title = ?, description = ? WHERE id = ?';
        return query(sql, values);
    },
    $delete: (values) => {
        const sql = 'DELETE FROM products WHERE id = ?';
        return query(sql, values);
    }
}
