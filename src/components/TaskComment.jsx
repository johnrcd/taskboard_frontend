import ReactTimeAgo from 'react-time-ago'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Identicon from "../components/Identicon";

const TaskComment = ({poster, dateCreated, content, keyValue}) => {
    const date = new Date(dateCreated);
    
    return (
        <article
            className="
                flex flex-row
            "
            key={keyValue}
        >
            <aside>
                <Identicon username={poster} width="50" height="50"/>
            </aside>
            <div>
                <h4 className="
                    text-primary-text
                    text-normal hover:underline
                    font-bold
                    tracking-tight inline-block
                ">
                    <Link to={"/profile?username=" + poster}>{poster}</Link>
                </h4>
                <p
                    className="
                        text-primary-tooltip text-sm
                        pl-2 tracking-tight
                        inline-block
                    "
                    title={date.toLocaleString()}
                >
                    {<ReactTimeAgo date={date} locale="en-US"/>}
                </p>
                <p className="
                    text-primary-text text-normal tracking-tight
                    max-w-xl break-words
                ">
                    {content}
                </p>
            </div>
        </article>
    )
};

export default TaskComment;