import ReactTimeAgo from 'react-time-ago'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Identicon from "../components/Identicon";
import { useTask } from '../hooks/useTask';

const UserActivity = ({user, type, datetimeCreated, task}) => {
    const {isLoading, task: taskData} = useTask(task);

    const dateFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const date = new Date(datetimeCreated);
    const formattedDate = date.toLocaleString("en-US", dateFormatOptions);
    const timeAgoDate = <ReactTimeAgo date={date} locale="en-US"/>

    const taskTitle = taskData.summary + " (" + (taskData.uuid || "loading1").substring(0, 8) + "...)";

    const taskLink = 
    <Link
        className="hover:underline text-note-text bg-note-background pl-1 pr-1"
        to={"/?task=" + task}
    >      
        {!isLoading && taskTitle}
    </Link>;

    let output = "";

    switch(type.toLowerCase()) {
        case "new task":
            output =
            <>
                Created a new task:&nbsp;{taskLink}
            </>
            break;
        case "new comment":
            output =
            <>
                Posted a comment on:&nbsp;{taskLink}
            </>
            break;
        case "task status change":
            break;
        case "unknown":
        default:

            break;
    }

    return (
        <article className="
            flex flex-row
        ">
            <p className="
                text-primary-tooltip text-sm
                tracking-tight
                inline-block
                flex-none
                w-24
            ">
                {timeAgoDate}
            </p>
            <p className="
                text-primary-text text-normal tracking-tight
                max-w-xl break-words pl-4 inline
            ">
                {output}
            </p>
        </article>
    );
};

export default UserActivity;