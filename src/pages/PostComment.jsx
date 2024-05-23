import PostCommentContainer from "../containers/PostCommentContainer";

const PostComment = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="flex align-center flex-col">
                <MainHeader />
                <div className="flex justify-center flex-col">
                    <PostCommentContainer />
                </div>
            </div>
        </div>
    );
}

export default PostComment;