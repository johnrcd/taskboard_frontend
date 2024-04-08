const TaskOverview = ({uuid, summary, onTaskClick}) => {
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

            onClick={() => onTaskClick(uuid)}
        >
            <div className="grow flex flex-col text-left">
                <p className="text-slate-400 text-sm tracking-tight">
                    uuid: {uuid}
                </p>
                <h3 className="text-white text-normal font-normal m-0 p-0 line-clamp-1">
                    {summary}
                </h3>
            </div>
        </button>
    )
}

export default TaskOverview;