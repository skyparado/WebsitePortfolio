// Entry point — boots Express, connects routes
// Run this with: node index.js

import 'dotenv/config'                        // 1. load .env variables
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import { authenticateApiSecret, errorHandler } from './middleware/middleware.js'

const app = express()

app.use(cors())                                   // 2. allow frontend to call this
app.use(express.json())                           // 3. parse JSON request bodies

app.use('/api/users', userRoutes)                 // 4. mount routes

app.use(errorHandler)                             // Global error handler

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))  // 5. start
