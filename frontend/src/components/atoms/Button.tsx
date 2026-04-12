// ATOM: The smallest, dumbest component possible.
// Has absolutely no business logic. Doesn't know what a "User" or "Post" is.

import React from 'react';

// 1. Define what props the button accepts
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  // 2. pure UI rendering
  const baseClass = "px-4 py-2 rounded font-bold transition-colors";
  const colorClass = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseClass} ${colorClass}`} {...props}>
      {children}
    </button>
  );
}

// Rules:
// - NEVER import a service or apiClient here.
// - NEVER use global state (store) here.
// - Atoms only receive data via props and emit events via callbacks (e.g., onClick).
