const TaskOverview = ({uuid, summary, onTaskClick}) => {
    return (
        <button className="
            w-full
            border-t-[3px]
            border-primary-border hover:border-note-border
            flex flex-col justify-between
            bg-primary-background hover:bg-note-background
            px-4 py-3"

            onClick={() => onTaskClick(uuid)}
        >
            <div className="grow flex flex-col text-left">
                <p className="text-primary-tooltip text-sm tracking-tight">
                    uuid: {uuid}
                </p>
                <h3 className="text-primary-text text-normal font-normal m-0 p-0 line-clamp-1">
                    {summary}
                </h3>
            </div>
        </button>
    )
}

export default TaskOverview;