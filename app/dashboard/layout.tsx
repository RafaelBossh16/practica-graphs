"use client";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <main lang="en">
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-950 selection:bg-blue-600 selection:text-white">
          <div className="flex flex-col relative w-screen">
            <Navbar />
            <div className="pl-64">{children}</div>
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}
