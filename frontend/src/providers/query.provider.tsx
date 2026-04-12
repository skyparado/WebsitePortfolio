// TanStack Query needs a "provider" wrapping your whole app
// Without this, useQuery() won't work anywhere

"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient())   // 1. create the client once

  return (
    <QueryClientProvider client={client}>             {/* 2. wrap everything */}
      {children}
    </QueryClientProvider>
  )
}

// Then go to app/layout.tsx and wrap your app with <QueryProvider>
// Without this wrapper, every useQuery() call crashes
