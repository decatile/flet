import { z } from "zod";
import { createCall } from "./utils";

const schema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string()
}).array()

export type Posts = z.output<typeof schema>

export const getPosts = createCall<Posts>('https://jsonplaceholder.typicode.com/posts', schema)
