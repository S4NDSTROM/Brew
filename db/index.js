const { Pool } = require('pg');
let dbConnectString = '';

if (process.env.DATABASE_URL) {
  dbConnectString = process.env.DATABASE_URL;
} else {
  dbConnectString = 'postgresql://postgres:docker@localhost:5432/skinnkylen-db';
}

console.log(dbConnectString);

const pool = new Pool({
  connectionString: dbConnectString,
});

const databaseConnect = async () => {
  console.debug('connecting to database');
  try {
    await pool.connect();
    console.debug('connection established');
  } catch (err) {
    console.debug(err);
  }
};

module.exports.databaseConnect = databaseConnect;
module.exports.pool = pool;
