import { useState, useEffect } from 'react';

import { fetchFromApi } from "../util/api.js";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import TaskList from "../containers/TaskList";
import TaskDetails from '../components/TaskDetails.jsx';

const Tasks = () => {
    const [currentTask, setCurrentTask] = useState({});

    const taskClickHandler = async (uuid) => {
        await fetchFromApi("/api/tasks/" + uuid)
            .then(response => { return response.json(); })
            .then(data => {
                setCurrentTask({
                    uuid: data.uuid,
                    summary: data.summary,
                    author: data.author,
                    category: data.category,
                    type: data.type,
                    status: data.status,
                    description: data.description,
                    comments: data.comments
                });
            });
    }

    return(
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="w-full max-w-screen-xl max-h-screen h-screen">
                <MainHeader />
                <div className="flex space-x-3">
                    <TaskList
                        className="flex-none w-70 overflow-y-scroll h-[70vh]"
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
                    />
                </div>
                {/* <MainFooter /> */}
            </div>
        </div>
    )
};

export default Tasks;