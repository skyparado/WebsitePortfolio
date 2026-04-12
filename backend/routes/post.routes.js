// Maps URLs to controller functions

import express from 'express';

import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

// The / here is relative — app.use("/api/posts", postRouter) in index.js makes it /api/posts
// Add more routes like router.get("/:id", postController.getOne) for single post
