// All external HTTP requests pass through here
// Nobody should ever write "fetch('http://localhost:5000/api/...')" inside a UI component

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  // 1. Add standard headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // 2. Perform the fetch
  const response = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });

  // 3. Centralized error handling
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'API request failed');
  }

  // 4. Return parsed JSON 
  return response.json();
}

// Rules:
// - ONLY `features/.../services.ts` files should import and use this apiClient.
// - UI Components should never import this directly.
