// This is the "smart" component — it has logic but no UI
// It connects the hook to the presentational component

import { usePosts } from "../hooks/usePosts"
import PostList from "../components/PostList"

export default function PostListContainer() {
  const { data: posts, isLoading, error } = usePosts()  // 1. get data from hook

  return (
    <PostList                                            // 2. pass it down to UI
      posts={posts ?? []}
      isLoading={isLoading}
      error={error?.message}
    />
  )
}

// Call the hook here, never inside the presentational component
// posts ?? [] means "use posts, or empty array if undefined"
// This file should have zero JSX styling — just wiring
