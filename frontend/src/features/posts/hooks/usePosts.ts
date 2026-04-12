// This wraps your service in TanStack Query
// It gives you loading/error/data for free

import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../services/post.service"

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],       // 1. cache key — think of it as the name of this data
    queryFn: fetchPosts,       // 2. the function that actually fetches
  })
}

// queryKey is how TanStack knows to cache/refetch — keep it unique per data type
// queryFn points to your service function — the hook doesn't fetch directly
// Returns { data, isLoading, error } — you use these in the container
