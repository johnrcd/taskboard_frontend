const TaskOverview = ({id, title, description, category, type, status, author}) => {
    return(
        <div className="flex space-x-5 bg-slate-800 rounded-lg px-4 py-3 ring-1 ring-slate-900/5 mt-2 mb-2 shadow-xl">
            <div className="grow flex space-y-10 flex-col">
                <div>
                    <h3 className="text-white text-lg font-medium m-0 p-0">
                        {title}
                    </h3>
                    <p className="text-slate-400">
                        {description}
                    </p>
                    <br />
                </div>
                <div>
                    <p className="text-slate-400 text-sm tracking-tight">
                        ID: {id}
                    </p>
                    <p className="text-slate-400 text-sm tracking-tight">
                        Author: {author}
                    </p>
                </div>
            </div>
            <div className="grow-0 flex-none w-32">
                <ul className="text-sm flex flex-wrap flex-col text-white">
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
                    <li className="bg-orange-500/30 hover:bg-orange-500/70 font-normal py-1 px-2 mt-3 rounded inline-block">
                        See Details
                    </li>
                </ul>
            </div>
            <br/>
        </div>
    )
}

export default TaskOverview;