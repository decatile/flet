import { getComments } from "./comments";
import { getPosts } from "./posts";
import { getUsers } from "./users";

export async function getAll(data: { signal: AbortSignal }) {
    const [users, posts, comments] = await Promise.all([
        getUsers(data),
        getPosts(data),
        getComments(data)
    ])
    return { users, posts, comments }
}

