import { Post } from "./Post";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/all";

export function Posts() {
    const { data } = useQuery({ queryKey: ['all'], queryFn: getAll })

    return (
        <div className="flex flex-col items-center w-full max-w-3xl gap-4">
            {data?.posts.map(post => <Post
                username={data.users.find(user => user.id === post.userId)!.username}
                title={post.title}
                body={post.body}
                comments={data.comments.filter(comment => comment.postId === post.id)}
                key={post.id}
            />)}
        </div>
    )
}
