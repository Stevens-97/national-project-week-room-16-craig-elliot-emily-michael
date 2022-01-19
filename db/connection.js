import pg from "pg";
import * as config from "../config.js";
import 'dotenv/config';


const pool = new pg.Pool({
   user: config.username,
   host: config.host,
   database: config.database,
   password: config.password,
   port: config.db_port,
   ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
   return pool.query(text, params);
}
