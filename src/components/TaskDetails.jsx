import TaskComment from "./TaskComment";
import PostCommentContainer from "../containers/PostCommentContainer";

const TaskDetails = ({uuid, summary, author, dateCreated, project, type, status, description, comments, style, onPostCommentClick}) => {
    // this feels wrong but i hate copy pasting
    const tagStyles =
        "bg-note-background " +
        "border-l-2 border-note-border " +
        "font-normal" +
        "py-1 px-2 mb-1 " +
        "inline-block ";
    
    function handlePostCommentForm(content) {
        onPostCommentClick(content, uuid);
    }

    return (
        <div className={
            // add spaces at the end of each string
            "bg-primary-background " +
            "px-4 py-3 " +
            "w-full " +
            "block " +
            style
        }>
            {summary !== "" && // mfw conditional rendering
                <div>
                    <h3 className="
                        text-primary-text text-2xl font-bold
                        m-0 p-0 pb-1 mb-2 line-clamp-1
                        border-b-2 border-primary-accent w-full
                    "
                        title={summary}
                    >
                        {summary}
                    </h3>

                    <ul className="text-xs flex flex-wrap flex-row space-x-1 text-note-text m-0">
                        <li><SideNote>Type:&nbsp;{type}</SideNote></li>
                        <li><SideNote>Project:&nbsp;{project}</SideNote></li>
                        <li><SideNote>Status:&nbsp;{status}</SideNote></li>
                    </ul>

                    <MetadataTag>uuid: {uuid}</MetadataTag>
                    <MetadataTag>author: {author}</MetadataTag>
                    <MetadataTag>posted on: {dateCreated}</MetadataTag>

                    <h4 className="
                        text-primary-text text-lg font-bold tracking-tight
                        mt-5 mb-1
                        border-b-2 border-primary-accent w-full
                    ">
                        Description
                    </h4>

                    <p className="
                        text-primary-tooltip text-normal tracking-tight
                        max-w-xl whitespace-pre-wrap
                    ">
                        {description}
                    </p>
                    
                    <h4 className="
                        text-primary-text text-lg font-bold tracking-tight
                        mt-5 mb-2 
                        border-b-2 border-primary-accent w-full
                    ">
                        Comments
                    </h4>

                    <div className="flex flex-col gap-4">
                    {
                        comments.map((comment, index) =>
                        <TaskComment
                            poster={comment.poster}
                            dateCreated={comment.date_created}
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
                    <h3 className="text-primary-text text-xl font-normal m-0 p-0 line-clamp-1">
                        No task selected.
                    </h3>
                </div>
            }
        </div>
    )
}

export default TaskDetails;

// not sure if having multiple components in one file is worth it for this
// scenario, but i have no intentions of using these components anywhere else,
// so eh, it feels right

// plus, i need the styling to match

// maybe i'll regret it later lol

const SideNote = ({children}) => {
    return (
        <div className="
          bg-note-background
            border-l-2 border-note-border
            font-normal
            py-1 px-2 mb-1
            inline-block
        ">
            {children}
        </div>
    );
}

const MetadataTag = ({children}) => {
    return (
        <div className="text-primary-tooltip text-sm tracking-tight">
            {children}
        </div>
    );
}
