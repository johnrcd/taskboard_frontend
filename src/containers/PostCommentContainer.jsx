import PostCommentForm from "../components/PostCommentForm";

const PostCommentContainer = ({onFormSubmitHandler}) => {
    function handleFormSubmit(content) {
        onFormSubmitHandler(content);
    }

    return (
        <div>
            <PostCommentForm
                onFormSubmitHandler={(content) => handleFormSubmit(content)}
            />
        </div>
    )
}

export default PostCommentContainer;