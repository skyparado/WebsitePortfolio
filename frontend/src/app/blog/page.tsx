// This is the PAGE Next.js shows when you go to /blog
// It doesn't do logic — it just renders the container

import PostListContainer from "@/features/posts/containers/PostListContainer"

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <PostListContainer />   {/* 1. drop the container here, that's it */}
    </main>
  )
}

// This file just says "show the blog page"
// All the real work happens inside PostListContainer
// You import it and drop it in — nothing else
