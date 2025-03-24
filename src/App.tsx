import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Posts } from "./components/Posts"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="w-full flex justify-center">
          <Posts />
        </div>
    </QueryClientProvider>
  )
}
