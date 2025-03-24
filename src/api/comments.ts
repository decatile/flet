import { z } from "zod";
import { createCall } from "./utils";

const schema = z.object({
    postId: z.number(),
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    body: z.string()
}).array()

export type Comments = z.output<typeof schema>

export const getComments = createCall<Comments>('https://jsonplaceholder.typicode.com/comments', schema)
