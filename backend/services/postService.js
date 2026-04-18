import * as postRepo from '../repositories/postRepository.js'

export async function createPost(body) {
  if (!body) throw new Error('Body is required')
  
  return await postRepo.createPost(body)
}

export async function getPostById(id) {
  if (!id) throw new Error('ID is required')

  const post = await postRepo.getPostById(id)
  if (!post) throw new Error('Post not found')

  return post
}

export async function getAllPosts() {
  return await postRepo.getAllPosts()
}

export async function updatePost(id, body) {
  if (!body) throw new Error('Body is required')

  const affected = await postRepo.updatePost(id, body)
  if (affected === 0) throw new Error('Post not found')

  return affected
}

export async function deletePost(id) {
  const affected = await postRepo.deletePost(id)
  if (affected === 0) throw new Error('Post not found')

  return affected
}
