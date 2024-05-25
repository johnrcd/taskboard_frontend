import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchFromApi } from "../util/api";

import PostCommentForm from "../components/PostCommentForm";

const PostCommentContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <PostCommentForm />
        </div>
    )
}

export default PostCommentContainer;