// This defines what a "Post" looks like as data
// Every other file imports this so they all agree on the shape

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

// Write this first before anything else
// Think of it like a contract — "a post always has these fields"
// If the backend sends { id, title, body, userId }, your type must match
