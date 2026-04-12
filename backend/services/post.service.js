// Business logic lives here
// Example: "a post must have a title" is a rule that goes here

const postRepo = require("../repositories/post.repository")

async function getAllPosts() {
  return await postRepo.getAllPosts()   // 1. simple passthrough (for now)
}

async function createPost(title, body, userId) {
  if (!title) throw new Error("Title is required")   // 2. business rule lives HERE

  return await postRepo.createPost(title, body, userId)
}

module.exports = { getAllPosts, createPost }

// Validation and rules go here, not in the controller
// The service never touches req or res — that's the controller's job
// For simple apps this looks like a passthrough — that's fine, the separation still matters
