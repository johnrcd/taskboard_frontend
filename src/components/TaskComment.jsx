const TaskComment = ({poster, dateCreated, content, keyValue}) => {
    return (
        <article
            className={
                "border-t-[3px] mt-2 p-2" +
                " border-note-border " +
                " bg-note-background " +
                "comment"
            }
            key={keyValue}
        >
            <h4 className="text-note-text text-normal font-bold tracking-tight inline-block">
                {poster}
            </h4>
            <p className="text-note-tooltip text-sm pl-2 tracking-tight inline-block">
                {dateCreated}
            </p>
            <p className="text-note-text text-normal tracking-tight max-w-xl break-words">
                {content}
            </p>
        </article>
    )
};

export default TaskComment;