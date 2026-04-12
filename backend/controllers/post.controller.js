// Handles HTTP — reads req, calls service, sends res
// Does NOT contain SQL or business rules

const postService = require("../services/post.service")

async function getAll(req, res) {
  try {
    const posts = await postService.getAllPosts()   // 1. call service
    res.json(posts)                                // 2. send response
  } catch (err) {
    res.status(500).json({ error: err.message })   // 3. handle error
  }
}

async function create(req, res) {
  try {
    const { title, body, userId } = req.body                    // 4. read from request body
    const id = await postService.createPost(title, body, userId)
    res.status(201).json({ id })                               // 5. 201 = Created
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { getAll, create }

// req.body is the data sent from the frontend (for POST requests)
// res.json() sends JSON back to whoever called the API
// Always wrap in try/catch — unhandled errors crash Express
