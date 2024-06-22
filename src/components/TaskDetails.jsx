import TaskComment from "./TaskComment";
import PostCommentContainer from "../containers/PostCommentContainer";

const TaskDetails = ({uuid, summary, author, dateCreated, project, type, status, description, comments, style, onPostCommentClick}) => {
    function handlePostCommentForm(content) {
        onPostCommentClick(content, uuid);
    }

    return (
        <div className={
            // add spaces at the end of each string
            "bg-primary-background " +
            "px-4 py-3 " +
            // "shadow-xl " +
            "w-full " +
            "block " +
            style
        }>
            {summary !== "" && // mfw conditional rendering
                <div>
                    <h3 className="text-primary-text text-2xl font-bold m-0 p-0 pb-1 mb-2 line-clamp-1 border-b-2 border-primary-accent w-full">
                        {summary}
                    </h3>

                    <ul className="text-xs flex flex-wrap flex-row space-x-1 text-note-text m-0">
                        <li className="bg-note-background border-l-2 border-note-border font-normal py-1 px-2 mb-1 inline-block">
                            Type:&nbsp;
                            <div className="inline-block">{type}</div>
                        </li>
                        <li className="bg-note-background border-l-2 border-note-border font-normal py-1 px-2 mb-1 inline-block">
                            Project:&nbsp;
                            <div className="inline-block">{project}</div>
                        </li>
                        <li className="bg-note-background border-l-2 border-note-border font-normal py-1 px-2 mb-1 inline-block">
                            Status:&nbsp;
                            <div className="inline-block">{status}</div>
                        </li>
                    </ul>

                    <p className="text-primary-tooltip text-sm tracking-tight">
                        uuid: {uuid}
                    </p>
                    <p className="text-primary-tooltip text-sm tracking-tight">
                        author: {author}
                    </p>
                    <p className="text-primary-tooltip text-sm tracking-tight">
                        posted on: {dateCreated}
                    </p>

                    <h4 className="text-primary-text text-lg font-bold tracking-tight mt-5 border-b-2 border-primary-accent w-full">Description</h4>
                    <p className="text-primary-tooltip text-normal tracking-tight max-w-xl whitespace-pre-wrap">{description}</p>
                    
                    <h4 className="text-primary-text text-lg font-bold tracking-tight mt-5 border-b-2 border-primary-accent w-full">Comments</h4>
                    <div className="flex flex-col gap-4">
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
                    </div>
                    <br />
                    <PostCommentContainer
                        onFormSubmitHandler={(uuid) => {handlePostCommentForm(uuid)}}
                    />
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