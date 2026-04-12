// This connects Node.js to your MySQL database
// Every other backend file uses this connection

const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host:     process.env.DB_HOST,      // 1. where MySQL is running (localhost)
  user:     process.env.DB_USER,      // 2. your MySQL username
  password: process.env.DB_PASSWORD,  // 3. your MySQL password
  database: process.env.DB_NAME,      // 4. the database name
})

module.exports = pool                 // 5. export so repository can use it

// Create a .env file in backend/ with DB_HOST=localhost, DB_USER=root, etc.
// pool means multiple requests can share connections — better than one connection
// Only the repository layer imports this — nothing else touches the DB directly
