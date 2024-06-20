import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuthentication } from '../hooks/useAuthentication.js';

import { fetchFromApi, fetchAsUser } from "../util/api.js";

import DefaultPage from "./templates/DefaultPage";
import TaskList from "../containers/TaskList.jsx";
import TaskDetails from '../components/TaskDetails.jsx';

const IndexPage = () => {
    const [currentTask, setCurrentTask] = useState({});
    const {isAuthenticated, isLoading} = useAuthentication();
    const navigate = useNavigate();

    const taskClickHandler = async (uuid) => {
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
                    project: data.project,
                    category: data.category,
                    type: data.type,
                    status: data.status,
                    description: data.description,
                    comments: data.comments,
                    dateCreated: formattedDate,
                });
            });
    }

    const handlePostCommentForm = async (content, uuid) => {
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "content": content,
                "task": uuid,
            })
        };

        await fetchAsUser("/api/comments/", options)
            .then(response => {
                if (response.ok) {
                    // refresh task details
                    taskClickHandler(uuid);
                }
                else {
                    alert("Something went wrong when attempting to post your comment...");
                }
            })
    };

    return(
        <DefaultPage>
            <div className="
                flex
                space-x-0 md:space-x-3 
                space-y-3 md:space-y-0
                flex-col md:flex-row
                mt-2 md:mt-0
            ">
                <TaskList
                    className="
                        flex-none 
                        w-full md:w-[360px] 
                        h-[30vh] md:h-[85vh] 
                        overflow-y-scroll "
                    onTaskClick={(uuid) => taskClickHandler(uuid)}
                />
                <TaskDetails
                    uuid        = {currentTask.uuid        || ""}
                    summary     = {currentTask.summary     || ""}
                    author      = {currentTask.author      || ""}
                    category    = {currentTask.category    || ""}
                    project     = {currentTask.project     || ""}
                    type        = {currentTask.type        || ""}
                    status      = {currentTask.status      || ""}
                    description = {currentTask.description || ""}
                    comments    = {currentTask.comments    || ""}
                    dateCreated = {currentTask.dateCreated || ""}
                    style="
                        md:w-70
                        md:h-[85vh]
                        md:overflow-y-scroll"
                    onPostCommentClick = {(content, uuid) => handlePostCommentForm(content, uuid)}
                />
            </div>
        </DefaultPage>
    )
};

export default IndexPage;