// All SQL lives here and nowhere else
import pool from '../config/db.js'

export async function getAllPosts() {
  const [rows] = await pool.query("SELECT * FROM posts ORDER BY id DESC")
  return rows
}

export async function getPostById(id) {
  const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id])
  return rows[0] || null
}

export async function createPost(body) {
  const [result] = await pool.query(
    "INSERT INTO posts (body) VALUES (?)",
    [body]
  )
  return { id: result.insertId, body }
}

export async function updatePost(id, body) {
  const [result] = await pool.query(
    "UPDATE posts SET body = ? WHERE id = ?",
    [body, id]
  )
  return result.affectedRows
}

export async function deletePost(id) {
  const [result] = await pool.query(
    "DELETE FROM posts WHERE id = ?",
    [id]
  )
  return result.affectedRows
}
