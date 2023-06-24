"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function QueryWrapper({ children }: { children?: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          error: {
            duration: 10000,
          },
        }}
      />
      {children}
    </QueryClientProvider>
  );
}
