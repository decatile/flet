import { useIsFetching, useQueryClient } from "@tanstack/react-query"

export function Refresh() {
    const queryClient = useQueryClient()
    const isFetching = !!useIsFetching({queryKey: ['all']})

    return (
        <button
            className="fixed right-5 bottom-5 bg-gray-500 px-5 py-2 rounded text-white disabled:bg-gray-700"
            onClick={() => queryClient.resetQueries({ queryKey: ['all'] })}
            disabled={isFetching}
        >
            Refresh
        </button>
    )
}