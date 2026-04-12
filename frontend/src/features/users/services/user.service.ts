// Handles specific API calls for Users
// Bridges the gap between the generic apiClient and your UI components

import { apiClient } from '../../../../lib/apiClient';
import { User } from '../types/user.types';

// 1. Fetch all users
export async function getAllUsers(): Promise<User[]> {
  return await apiClient('/users'); // calls GET http://localhost:5000/api/users automatically
}

// 2. Create a new user
export async function createUser(name: string, bio: string): Promise<User> {
  return await apiClient('/users', {
    method: 'POST',
    body: JSON.stringify({ name, bio })
  });
}
