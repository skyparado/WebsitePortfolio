// All TypeScript shapes (interfaces/types) for users go here
// This ensures the frontend agrees with the backend structure

export interface User {
  id: number;
  name: string;
  bio: string;
}

// Rules:
// - Never use `any`. Always define your shapes here.
// - If the backend adds a "profilePic" field, you add it here, and TS will help you update everything.
