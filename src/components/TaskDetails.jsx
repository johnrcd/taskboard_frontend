const TaskDetails = ({uuid, summary, author, category, type, status, description}) => {
    return(
        <div className="
            bg-gradient-to-t from-cyan-400/10 to-blue-500/10
            rounded-lg
            px-4 py-3
            mt-2 mb-2
            shadow-xl
            w-full
            block"
        >
            {summary !== "" && // mfw conditional rendering
                <div>
                    <h3 className="text-white text-xl font-normal m-0 p-0 line-clamp-1">
                        {summary}
                    </h3>

                    <ul className="text-xs flex flex-wrap flex-row space-x-1 text-white m-0 mt-1">
                        <li className="bg-blue-500/40 font-normal py-1 px-2 mb-1 rounded inline-block">
                            Category:&nbsp;
                            <div className="inline-block">{category}</div>
                        </li>
                        <li className="bg-red-500/40 font-normal py-1 px-2 mb-1 rounded inline-block">
                            Type:&nbsp;
                            <div className="inline-block">{type}</div>
                        </li>
                        <li className="bg-green-500/40 font-normal py-1 px-2 mb-1 rounded inline-block">
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

                    <h4 className="text-slate-200 text-normal font-bold tracking-tight mt-5">Description</h4>
                    <p className="text-slate-300 text-normal tracking-tight max-w-xl">{description}</p>
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