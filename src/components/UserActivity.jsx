import ReactTimeAgo from 'react-time-ago'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Identicon from "../components/Identicon";

const UserActivity = ({user, type, datetimeCreated, task}) => {
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

    switch(type.toLowerCase()) {
        case "new task":
            output =
            <p>
                {user} has created a new task: 
                <Link
                    className="h-full py-[14px] px-3 hover:bg-offset-accent hover:text-offset-background"
                    to={"/?task=" + task}
                >
                    {task}
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
        <>
            <p className="
                text-primary-text text-normal tracking-tight
                max-w-xl break-words
            ">
                {output}
            </p>
        </>
    );
};

export default UserActivity;