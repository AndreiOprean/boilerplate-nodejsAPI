var Pool = require('pg').Pool;
var pool = new Pool();
module.exports = {
    query: function (text, params) {
        return pool.query(text, params);
    }
};
