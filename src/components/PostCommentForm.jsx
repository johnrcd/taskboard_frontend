const PostCommentForm = () => {
return(
    <form className="bg-gradient-to-b from-cyan-400/5 to-blue-500/10 rounded-lg px-4 py-3 inline-block">
        {/* SUMMARY INPUT */}
        <label className="text-stone-100" htmlFor="summary">Summary</label><br />
        <input
            className="
                bg-slate-400/10
                text-stone-300
                rounded-md p-1
                w-full
            "
            type="text"
            id="summary"
            name="summary"
            maxLength={255}
            required
        /><br />
        <p className="text-stone-400">Provide a brief overview of your task. Ideally, 1-2 sentences.</p>

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
                Submit Comment
            </button>
        </div>
    </form>
)
};

export default PostCommentForm;