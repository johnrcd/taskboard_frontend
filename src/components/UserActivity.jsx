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

    let output = "";

    console.log(taskData);

    switch(type.toLowerCase()) {
        case "new task":
            output =
            <p>
                {user} has created a new task:&nbsp;
                <Link
                    className="hover:underline"
                    to={"/?task=" + task}
                >      
                    {!isLoading && taskData.summary}
                </Link>
            </p>
            break;
        case "new comment":
            break;
        case "task status change":
            break;
        case "unknown":
        default:

            break;
    }

    return (
        <article className="
            flex flex-col
        ">
            <p className="
                text-primary-tooltip text-sm
                tracking-tight
                inline-block
            ">
                {formattedDate} ({timeAgoDate})
            </p>
            <p className="
                text-primary-text text-normal tracking-tight
                max-w-xl break-words
            ">
                {output}
            </p>
        </article>
    );
};

export default UserActivity;