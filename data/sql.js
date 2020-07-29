const database = require('./index.js')

module.exports = {
    query: (query, values = []) => {
        console.log(database.format(query, values));
        return new Promise((resolve, reject) => {
            database.query(query, values, (e, rows) => {
                if (e) {
                    return reject(e);
                } else {
                    return resolve(rows);
                }
            });
        })
    },
}
