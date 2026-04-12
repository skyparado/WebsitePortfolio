// CONTAINER: A "Smart" component.
// It manages state, and talks to services/APIs for this specific feature.
'use client'; 

import React, { useEffect, useState } from 'react';
import { User } from '../types/user.types';
import { getAllUsers } from '../services/user.service';
import UserCard from '../components/UserCard';

export default function UserListContainer() {
  const [users, setUsers] = useState<User[]>([]);  // 1. Holds state
  const [error, setError] = useState('');

  // 2. Fetches its own data on mount
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getAllUsers(); // calls the service, NOT the apiClient directly!
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      }
    }
    loadUsers();
  }, []);

  const handleDelete = (id: number) => {
    console.log(`Instructing service to delete user ${id}...`);
  };

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* 3. Renders feature-specific molecules */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
}
