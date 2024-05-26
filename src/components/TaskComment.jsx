const TaskComment = ({poster, dateCreated, content, keyValue}) => {
    return (
        <article
            className={
                "border-t-2 mt-2 p-2" +
                " border-slate-400/50 " +
                " bg-slate-400/5 " +
                "comment"
            }
            key={keyValue}
        >
            <h4 className="text-slate-200 text-normal font-bold tracking-tight inline-block">
                {poster}
            </h4>
            <p className="text-slate-400 text-sm pl-2 tracking-tight inline-block">
                {dateCreated}
            </p>
            <p className="text-slate-300 text-normal tracking-tight max-w-xl">
                {content}
            </p>
        </article>
    )
};

export default TaskComment;