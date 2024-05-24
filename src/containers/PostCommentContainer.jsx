import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchFromApi } from "../util/api";

import PostCommentForm from "../components/PostCommentForm";
import TaskComment from "../components/TaskComment";

const PostCommentContainer = () => {
    const [comments, setComments] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        let ignore = false;
        fetchFromApi("/api/tasks/" + searchParams.get("uuid"))
            .then(response => { return response.json(); })
            .then(data => {
                if (!ignore) {
                    console.log(data);
                    setComments(data.comments);
                    console.log(comments);
                }
            });

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div>
            {
                comments.map((comment, index) => {
                    <TaskComment
                        poster={comment.poster}
                        dateCreated={new Date(comment.date_created).toLocaleString()}
                        content={comment.content}
                        key={"comment_" + searchParams.get("uuid") + "_" + index}
                    />
                })
            }
            <PostCommentForm />
        </div>
    )
}

export default PostCommentContainer;