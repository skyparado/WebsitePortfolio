// business logic and validation only — no SQL, no pool
import * as userRepo from '../repositories/userRepository.js'

export async function createUser(name, bio) {
  if (!name) throw new Error('Name is required')        // business rule
  if (name.length > 100) throw new Error('Name too long')  // business rule

  return await userRepo.createUser(name, bio)
}

export async function getUserById(id) {
  if (!id) throw new Error('ID is required')

  const user = await userRepo.getUserById(id)
  if (!user) throw new Error('User not found')   // business rule — 404 logic lives here

  return user
}

export async function getAllUsers() {
  return await userRepo.getAllUsers()    // simple passthrough is fine
}

export async function updateUser(id, name, bio) {
  if (!name) throw new Error('Name is required')

  const affected = await userRepo.updateUser(id, name, bio)
  if (affected === 0) throw new Error('User not found')  // nothing was updated

  return affected
}

export async function deleteUser(id) {
  const affected = await userRepo.deleteUser(id)
  if (affected === 0) throw new Error('User not found')

  return affected
}
