const TaskOverview = ({uuid, summary, onTaskClick}) => {
    return (
        <button className="
            w-full
            flex flex-col justify-between
            bg-primary-background hover:bg-note-background
            px-4 py-3
            rounded-2xl
        "
            onClick={() => onTaskClick(uuid)}
        >
            <div className="grow flex flex-col text-left">
                <p className="text-primary-tooltip text-sm tracking-tight line-clamp-1"
                    title={"uuid: " + uuid}
                >
                    uuid: {uuid}
                </p>
                <h3 className="text-primary-text text-normal font-normal m-0 p-0 line-clamp-1"
                    title={summary}
                >
                    {summary}
                </h3>
            </div>
        </button>
    )
}

export default TaskOverview;