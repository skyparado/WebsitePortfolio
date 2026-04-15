// base configuration
import mysql from 'mysql2/promise'
import 'dotenv/config'

// process.env avoids hardcoding stuff like passwords
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

async function checkDbConnection() {
  try {
    const conn = await pool.getConnection()
    await conn.ping()
    console.log('DB connection successful')
    conn.release()
  } catch (err) {
    console.error('DB connection failed:', err.message)
    console.warn('Backend is running, but database connection is unavailable. Ensure MySQL is running and .env is configured correctly.')
  }
}

checkDbConnection()

export default pool