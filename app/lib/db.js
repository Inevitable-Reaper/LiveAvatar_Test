import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  // ❌ REMOVE or COMMENT OUT the SSL block for local testing
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

pool.on("connect", () => {
  console.log("Connected to Local PostgreSQL successfully");
});

pool.on("error", (err) => {
  console.error("PostgreSQL connection error:", err);
});

export default pool;