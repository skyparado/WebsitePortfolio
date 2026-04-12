// All SQL lives here and nowhere else
// Service calls this, repository calls the DB

const pool = require("../config/db")   // 1. get the DB connection

async function getAllPosts() {
  const [rows] = await pool.query("SELECT * FROM posts")  // 2. run SQL
  return rows                                              // 3. return raw rows
}

async function createPost(title, body, userId) {
  const [result] = await pool.query(
    "INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)",  // 4. never use string concat — use ?
    [title, body, userId]
  )
  return result.insertId   // 5. return the new post's ID
}

module.exports = { getAllPosts, createPost }

// Never write SQL in the controller or service — only here
// Always use ? placeholders, never "... WHERE id = " + id — that's a SQL injection
// const [rows] — mysql2 returns [rows, fields], you only need rows
