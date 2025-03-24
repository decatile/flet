import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Posts } from "./components/Posts"
import { Refresh } from "./components/Refresh"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="w-full min-h-screen flex justify-center">
          <Posts />
          <Refresh />
        </div>
    </QueryClientProvider>
  )
}
