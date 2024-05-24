import MainHeader from "../components/MainHeader";
import PostCommentContainer from "../containers/PostCommentContainer";

const PostComment = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="w-full max-w-7xl flex align-center flex-col">
                <MainHeader />
                <PostCommentContainer />
            </div>
        </div>
    );
}

export default PostComment;