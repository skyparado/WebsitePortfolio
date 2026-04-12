// Maps URLs to controller functions
// Nothing else — no logic here

const express = require("express")
const router = express.Router()
const postController = require("../controllers/post.controller")

router.get("/",     postController.getAll)   // GET  /api/posts
router.post("/",    postController.create)   // POST /api/posts

module.exports = router

// The / here is relative — app.use("/api/posts", postRouter) in index.js makes it /api/posts
// Add more routes like router.get("/:id", postController.getOne) for single post
