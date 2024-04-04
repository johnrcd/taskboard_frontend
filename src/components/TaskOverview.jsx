const TaskOverview = ({uuid, title, category, type, status, onTaskClick}) => {
    return(
        <button className="
            w-full
            flex flex-col justify-between
            bg-gradient-to-r from-cyan-500/10 to-blue-500/10
            hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30
            rounded-lg
            px-4 py-3
            ring-1 ring-slate-900/5
            mt-2 mb-2
            shadow-xl"

            onClick={onTaskClick}
        >
            <div className="grow flex flex-col text-left">
                <p className="text-slate-400 text-sm tracking-tight">
                    uuid: {uuid}
                </p>
                <h3 className="text-white text-normal font-normal m-0 p-0 line-clamp-1">
                    {title}
                </h3>
            </div>
            {/* <ul className="text-xs flex flex-wrap flex-row text-white m-0 mt-3">
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
            </ul> */}
        </button>
    )
}

export default TaskOverview;