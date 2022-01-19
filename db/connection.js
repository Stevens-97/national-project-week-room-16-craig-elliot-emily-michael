import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
   user: config.PGUSER,
   host: config.PGHOST,
   database: config.PGDATABASE,
   password: config.PGPASSWORD,
   port: config.PGPORT,
   ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
   return pool.query(text, params);
}
