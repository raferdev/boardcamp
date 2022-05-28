import pg from 'pg';
import "dotenv/config";

const {Pool} = pg;
const db = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

export default db;
