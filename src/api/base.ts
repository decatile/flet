import { z } from "zod"

export default function createCall(url: string, schema: z.Schema) {
    return async ({ signal }: { signal: AbortSignal }) => {
        const resp = await fetch(url, { signal })
        if (!resp.ok) throw Error(`Cannot request ${url}`)
        return schema.parse(await resp.json())
    }
}
