const { Pool } = require('pg');
let pool = null;
let retries = 5;

while (retries > 0) {
  try {
    pool = new Pool();
    break;
  } catch (e) {
    console.log(e);
    retries -= 1;
  }
}
module.exports = {
  query: (text: string, params: any) => {
    return pool.query(text, params)
  }
}