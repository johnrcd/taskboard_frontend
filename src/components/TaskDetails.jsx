const TaskDetails = ({uuid, summary, author, dateCreated, type, status, description, comments, style}) => {
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
                        <li className="bg-cyan-500/40 font-normal py-1 px-2 mb-1 rounded inline-block">
                            Type:&nbsp;
                            <div className="inline-block">{type}</div>
                        </li>
                        <li className="bg-blue-500/40 font-normal py-1 px-2 mb-1 rounded inline-block">
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
                        <div className="border-t-2 border-slate-400/50 mt-2 p-2 bg-slate-400/5">
                            <h4 className="text-slate-200 text-normal font-bold tracking-tight inline-block">
                                {comment.poster}
                            </h4>
                            <p className="text-slate-400 text-sm pl-2 tracking-tight inline-block">
                                {new Date(comment.date_created).toLocaleString()}
                            </p>
                            <p className="text-slate-300 text-normal tracking-tight max-w-xl">
                                {comment.content}
                            </p>
                        </div>
                        )
                    }
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