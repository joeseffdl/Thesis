
"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

export default function QueryWrapper({ children }: { children?: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          padding: "16px",
          fontWeight: "500",
        },
      }}
    />
    {children}
    </QueryClientProvider>
  )
}