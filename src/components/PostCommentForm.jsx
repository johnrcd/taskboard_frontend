import { useState } from 'react';

const PostCommentForm = ({onFormSubmitHandler}) => {
    const [characterCount, setCharacterCount] = useState(0);

    const maxCharacterCount = 250;

    function handleCommentOnKeyUp(e) {
        setCharacterCount(e.target.value.length);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form); 
        const data = {};

        formData.forEach((value, key) => data[key] = value);

        // hackiest solution of all time
        e.target.reset();
        setCharacterCount(0)

        onFormSubmitHandler(data.content);
    }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <textarea
                className="form-input-text"
                type="text"
                id="content"
                name="content"
                maxLength={maxCharacterCount}
                rows={3}
                placeholder="Add a comment..."
                onInput={handleCommentOnKeyUp}
                required
            >
            </textarea>

            <p className="text-primary-tooltip">Remaining Characters: {maxCharacterCount - characterCount}</p>

            <div className="flex justify-center">
                <button
                    className="form-button-submit"
                    type="submit"
                >
                    Post Comment
                </button>
            </div>
        </form>
    )
};

export default PostCommentForm;