// This is the file that actually talks to your backend
// It makes the HTTP request and returns typed data

import { Post } from "../types/post.types"

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:5000/api/posts")  // 1. hit your backend

  if (!res.ok) throw new Error("Failed to fetch posts")      // 2. crash loudly if broken

  const data: Post[] = await res.json()                      // 3. parse as Post[]
  return data                                                 // 4. return it
}

// The URL http://localhost:5000/api/posts points to your Express backend
// Later move that URL to an env variable like process.env.NEXT_PUBLIC_API_URL
// This function does nothing else — no UI, no state, just fetch and return
