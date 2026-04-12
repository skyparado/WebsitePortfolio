// MOLECULE: A simple combination of Atoms.
// Can know about specific Data Types (like User), but still doesn't fetch its own data.

import React from 'react';
import { User } from '../types/user.types';
import Button from '../../../components/atoms/Button';

interface UserCardProps {
  user: User;                 // 1. Takes data as a prop
  onDelete?: (id: number) => void; // 2. Parent handles the actual delete action
}

export default function UserCard({ user, onDelete }: UserCardProps) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="text-xl font-bold">{user.name}</h3>
      <p className="text-gray-600 mb-4">{user.bio}</p>
      
      {/* 3. Uses a global Atom */}
      <Button variant="secondary" onClick={() => onDelete?.(user.id)}>
        Delete
      </Button>
    </div>
  );
}
