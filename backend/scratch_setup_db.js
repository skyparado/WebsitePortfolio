import pool from './config/db.js';

async function setup() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        body TEXT NOT NULL
      )
    `);
    console.log("posts table created successfully");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

setup();
