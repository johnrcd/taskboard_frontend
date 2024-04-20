import { useState, useEffect } from 'react';

import { fetchFromApi } from "../util/api.js";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import TaskList from "../containers/TaskList";
import TaskDetails from '../components/TaskDetails.jsx';

const Tasks = () => {
    const [currentTask, setCurrentTask] = useState({});

    const taskClickHandler = async (uuid) => {
        let comments = [];
        await fetchFromApi("/api/comments/?uuid=" + uuid)
            .then(response => { return response.json(); })
            .then(data => {
                if (data !== undefined && data !== null) {
                    comments = data;
                }
            });
        
        await fetchFromApi("/api/tasks/" + uuid)
            .then(response => { return response.json(); })
            .then(data => {
                const dateFormatOptions = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                };
                const date = new Date(data.date_created);
                const formattedDate =
                    date.toLocaleString("en-US", dateFormatOptions);

                setCurrentTask({
                    uuid: data.uuid,
                    summary: data.summary,
                    author: data.author,
                    category: data.category,
                    type: data.type,
                    status: data.status,
                    description: data.description,
                    comments: comments,
                    dateCreated: formattedDate,
                });
            });
    }

    return(
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="w-full max-w-screen-xl">
                <MainHeader />
                <div className="
                    flex
                    space-x-0 md:space-x-3 
                    space-y-3 md:space-y-0
                    flex-col md:flex-row
                ">
                    <TaskList
                        className="
                            flex-none 
                            w-full md:w-[360px] 
                            h-[30vh] md:h-[70vh] 
                            overflow-y-scroll "
                        onTaskClick={(uuid) => taskClickHandler(uuid)}
                    />
                    <TaskDetails
                        uuid        = {currentTask.uuid        || ""}
                        summary     = {currentTask.summary     || ""}
                        author      = {currentTask.author      || ""}
                        category    = {currentTask.category    || ""}
                        type        = {currentTask.type        || ""}
                        status      = {currentTask.status      || ""}
                        description = {currentTask.description || ""}
                        comments    = {currentTask.comments    || ""}
                        dateCreated = {currentTask.dateCreated || ""}
                        style="
                            md:w-70
                            md:h-[70vh]
                            md:overflow-y-scroll"
                    />
                </div>
                {/* <MainFooter /> */}
            </div>
        </div>
    )
};

export default Tasks;