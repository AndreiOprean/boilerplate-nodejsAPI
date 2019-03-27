const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
  query: (text: string, params: any) => {
    return pool.query(text, params)
  }
}