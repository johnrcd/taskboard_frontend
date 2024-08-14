import ReactTimeAgo from 'react-time-ago'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Identicon from "../components/Identicon";

const TaskComment = ({poster, posterName, dateCreated, content, keyValue}) => {
    console.log(posterName);
    const date = new Date(dateCreated);
    
    return (
        <article
            className="
                flex flex-row
            "
            key={keyValue}
        >
            <aside className="flex-none">
                <Identicon username={poster} width="50" height="50"/>
            </aside>
            <div>
                <h4 className="
                    text-primary-text
                    text-normal hover:underline
                    font-bold
                    tracking-tight inline-block
                    break-all
                ">
                    <Link to={"/profile/?username=" + poster}>{posterName}</Link>
                </h4>
                <h5 className="
                    text-primary-tooltip text-normal
                    pl-1 tracking-tight
                    inline-block
                ">
                    (@{poster})
                </h5>
                <p
                    className="
                        text-primary-tooltip text-sm
                        pl-1 tracking-tight
                        inline-block
                    "
                    title={date.toLocaleString()}
                >
                    {<ReactTimeAgo date={date} locale="en-US"/>}
                </p>
                <p className="
                    text-primary-text text-normal tracking-tight
                    break-words
                ">
                    {content}
                </p>
            </div>
        </article>
    )
};

export default TaskComment;