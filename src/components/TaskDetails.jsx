import TaskComment from "./TaskComment";

const TaskDetails = ({uuid, summary, author, dateCreated, project, type, status, description, comments, style, onPostCommentClick}) => {
    function handlePostCommentButton(e) {
        e.preventDefault();
        onPostCommentClick(uuid);
    }
    
    return(
        <div className={
            // add spaces at the end of each string
            "bg-gradient-to-b from-cyan-400/5 to-blue-500/10 " +
            "rounded-lg " +
            "px-4 py-3 " +
            "shadow-xl " +
            "w-full " +
            "block " +
            style
        }>
            {summary !== "" && // mfw conditional rendering
                <div>
                    <h3 className="text-white text-xl font-normal m-0 p-0 line-clamp-1">
                        {summary}
                    </h3>

                    <ul className="text-xs flex flex-wrap flex-row space-x-1 text-white m-0 mt-1">
                        <li className="bg-cyan-500/30 font-normal py-1 px-2 mb-1 rounded inline-block">
                            Type:&nbsp;
                            <div className="inline-block">{type}</div>
                        </li>
                        <li className="bg-sky-500/30 font-normal py-1 px-2 mb-1 rounded inline-block">
                            Project:&nbsp;
                            <div className="inline-block">{project}</div>
                        </li>
                        <li className="bg-blue-500/30 font-normal py-1 px-2 mb-1 rounded inline-block">
                            Status:&nbsp;
                            <div className="inline-block">{status}</div>
                        </li>
                    </ul>

                    <p className="text-slate-400 text-sm tracking-tight mt-3">
                        uuid: {uuid}
                    </p>
                    <p className="text-slate-400 text-sm tracking-tight">
                        author: {author}
                    </p>
                    <p className="text-slate-400 text-sm tracking-tight">
                        posted on: {dateCreated}
                    </p>

                    <h4 className="text-slate-200 text-normal font-bold tracking-tight mt-5">Description</h4>
                    <p className="text-slate-300 text-normal tracking-tight max-w-xl whitespace-pre-wrap">{description}</p>
                    
                    <h4 className="text-slate-200 text-normal font-bold tracking-tight mt-5">Comments</h4>
                    {
                        comments.map((comment, index) =>
                        <TaskComment
                            poster={comment.poster}
                            dateCreated={new Date(comment.date_created).toLocaleString()}
                            content={comment.content}
                            key={"comment_" + uuid + "_" + index}
                        />
                        )
                    }
                        <button
                            className="
                                bg-cyan-800 hover:bg-cyan-700 
                                text-white
                                py-1 px-2
                                mt-2
                                border-b-2 border-sky-900
                                hover:border-sky-800
                                rounded
                            "
                            type="button"
                            onClick={handlePostCommentButton}
                        >
                        Post a Comment...
                    </button>
                </div>
            }
            {summary === "" &&
                <div className="flex justify-center align-middle">
                    <h3 className="text-white text-xl font-normal m-0 p-0 line-clamp-1">
                        No task selected.
                    </h3>
                </div>
            }
        </div>
    )
}

export default TaskDetails;