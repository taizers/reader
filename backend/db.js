const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: '03687',
    host: 'localhost',
    port: 5432,
    database: 'reader'
});

module.exports = pool;