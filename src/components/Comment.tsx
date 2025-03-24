import { Comments } from "../api/comments";

type Props = { comment: Comments[number] }

export function Comment({ comment }: Props) {
    return (
        <div className="flex flex-col gap-2 border rounded w-full p-2 bg-gray-200">
            <div className="text-lg">{comment.name}</div>
            <div>{comment.body}</div>
            <hr />
            <div>{comment.email}</div>
        </div>
    )
}