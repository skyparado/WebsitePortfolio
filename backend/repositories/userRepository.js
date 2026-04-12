// All SQL lives here and nowhere else
import pool from '../config/db.js'

export async function getAllUsers() {
  const [rows] = await pool.query("SELECT * FROM users")
  return rows
}

export async function getUserById(id) {
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id])
  return rows[0] || null
}

export async function createUser(name, bio) {
  const [result] = await pool.query(
    "INSERT INTO users (name, bio) VALUES (?, ?)",
    [name, bio]
  )
  return { id: result.insertId, name, bio }
}

export async function updateUser(id, name, bio) {
  const [result] = await pool.query(
    "UPDATE users SET name = ?, bio = ? WHERE id = ?",
    [name, bio, id]
  )
  return result.affectedRows
}

export async function deleteUser(id) {
  const [result] = await pool.query(
    "DELETE FROM users WHERE id = ?",
    [id]
  )
  return result.affectedRows
}
