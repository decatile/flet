import { Post } from "./Post";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/all";
import { ClipLoader } from "react-spinners";

export function Posts() {
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['all'], queryFn: getAll })

    if (isLoading) return (
        <div className="flex items-center">
            <ClipLoader size={100} color="red" />
        </div>
    )
    if (isError) return (
        <div className="flex items-center">
            <div className="text-red-500 text-xl">{error.message}</div>
        </div>
    )

    return (
        <div className="flex flex-col items-center h-full w-full max-w-3xl gap-4">
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
