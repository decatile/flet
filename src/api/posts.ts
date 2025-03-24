import { z } from "zod";
import createCall from "./base";

const schema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string()
}).array()

export const getPosts = createCall('https://jsonplaceholder.typicode.com/posts', schema)
