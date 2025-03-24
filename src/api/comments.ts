import { z } from "zod";
import createCall from "./base";

const schema = z.object({
    postId: z.number(),
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    body: z.string()
}).array()

export const getComments = createCall('https://jsonplaceholder.typicode.com/comments', schema)
