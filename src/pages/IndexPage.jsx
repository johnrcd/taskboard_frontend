import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuthentication } from '../hooks/useAuthentication.js';

import { fetchFromApi, fetchAsUser } from "../util/api.js";

import DefaultPage from "./templates/DefaultPage";
import TaskList from "../containers/TaskList.jsx";
import TaskDetails from '../components/TaskDetails.jsx';
import MainHeader from '../components/MainHeader.jsx';

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
        <div className="flex flex-col max-h-screen h-screen">
            <div className="flex-none"><MainHeader /></div>
            <main className="flex flex-row flex-1 max-w-7xl w-full m-auto h-full max-h-full">
                <TaskList
                    className="
                        flex-none 
                        w-full md:w-[360px] 
                        overflow-y-scroll 
                        h-full
                        max-h-full"
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
                        overflow-y-scroll
                        h-full
                        flex-1"
                    onPostCommentClick = {(content, uuid) => handlePostCommentForm(content, uuid)}
                />
            </main>
        </div>
    )
};

export default IndexPage;