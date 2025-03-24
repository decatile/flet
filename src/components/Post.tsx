import { useReducer } from "react";
import { Comments } from "../api/comments";
import { Comment } from "./Comment";

type Props = {
    username: string;
    title: string;
    body: string;
    comments: Comments;
}

export function Post(props: Props) {
    const [showComments, toggleComments] = useReducer(x => !x, false)

    return (
        <div className="flex flex-col gap-2 border rounded w-full p-2">
            <div className="text-lg">{props.title}</div>
            <div>{props.body}</div>
            <hr />
            <div className="flex justify-between">
                <div>@{props.username}</div>
                <button type="button" onClick={toggleComments}>{showComments ? 'Close comments' : 'Open comments'}</button>
            </div>
            {
                showComments && (
                    <>
                        <hr />
                        {props.comments.map(comment => <Comment comment={comment} key={comment.id} />)}
                    </>
                )
            }
        </div>
    )
}
