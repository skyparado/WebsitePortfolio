// Entry point — boots Express, connects routes
// Run this with: node index.js

require("dotenv").config()                        // 1. load .env variables

const express = require("express")
const cors    = require("cors")
const postRoutes = require("./routes/post.routes")

const app = express()

app.use(cors())                                   // 2. allow frontend to call this
app.use(express.json())                           // 3. parse JSON request bodies

app.use("/api/posts", postRoutes)                 // 4. mount routes

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))  // 5. start

// dotenv reads your .env file — call it first before anything else
// cors() is required or your Next.js frontend gets blocked by the browser
// express.json() is required or req.body will be undefined
