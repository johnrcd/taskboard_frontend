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
                className="
                    box-border resize
                    bg-note-background
                    border-2
                    border-note-border
                    text-note-text
                    placeholder-note-tooltip
                    p-1
                    w-full
                    rounded
                "
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

            <br />

            <p className="text-primary-tooltip">Remaining Characters: {maxCharacterCount - characterCount}</p>

            <br />
            <div className="flex justify-center">
                <button
                    className="
                        bg-offset-background hover:bg-note-border
                        text-offset-text font-bold
                        py-2 px-4
                        rounded
                    "
                    type="submit"
                >
                    Post Comment
                </button>
            </div>
        </form>
    )
};

export default PostCommentForm;