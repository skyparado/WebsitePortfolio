// This is the "dumb" component — pure UI, no logic
// It only knows what it receives via props

import { Post } from "../types/post.types"

type Props = {
  posts: Post[]
  isLoading: boolean
  error?: string
}

export default function PostList({ posts, isLoading, error }: Props) {
  if (isLoading) return <p>Loading posts...</p>           // 1. handle loading
  if (error)     return <p>Error: {error}</p>             // 2. handle error

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>                                {/* 3. always need key */}
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

// No useQuery, no fetch, no useState here — props only
// Always handle loading + error states or your UI will break silently
// key={post.id} is required by React when mapping a list
