const { Pool } = require('pg');

let dbConnectString =
  'postgresql://postgres:docker@localhost:5432/skinnkylen-db';
if (process.env.NODE_env === 'production') {
  dbConnectString = process.env.DATABASE_URL;
}

const pool = new Pool({
  connectionString: 'postgresql://postgres:docker@localhost:5432/skinnkylen-db',
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
