import { z } from "zod"

export function createCall<R>(url: string, schema: z.ZodType<R>) {
    return async ({ signal }: { signal: AbortSignal }) => {
        const resp = await fetch(url, { signal })
        if (!resp.ok) throw Error(`Cannot request ${url}`)
        return schema.parse(await resp.json())
    }
}
