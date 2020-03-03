import { pool } from "pg"
import dotnev from "dotnev"

dotnev.config()

const databaseConfig = { connectionString: process.env.DATABASE_URL }
const pool = new Pool(databaseConfig)

export default pool