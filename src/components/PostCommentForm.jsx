import { useState, useEffect } from 'react';
import { fetchFromApi } from "../util/api.js";

const PostCommentForm = () => {
    const [characterCount, setCharacterCount] = useState(0);

    const maxCharacterCount = 250;

    function handleCommentOnKeyUp(e) {
        setCharacterCount(e.target.value.length);
    }

    return(
        <form className="bg-gradient-to-b from-cyan-400/5 to-blue-500/10 rounded-lg px-4 py-3 inline-block">
            <textarea
                className="
                    box-border resize
                    bg-slate-400/10
                    text-stone-300
                    rounded-md p-1
                    w-full
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

            <p className="text-stone-400">Remaining Characters: {maxCharacterCount - characterCount}</p>

            <br />
            <div className="flex justify-center">
                <button
                    className="
                        bg-cyan-800 hover:bg-cyan-700 
                        text-white font-bold
                        py-2 px-4
                        border-b-4 border-sky-900
                        hover:border-sky-800
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