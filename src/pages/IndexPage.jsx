import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from "react-router-dom";
import { useAuthentication } from '../hooks/useAuthentication.js';

import { fetchFromApi, fetchAsUser } from "../util/api.js";

import DefaultPage from "./templates/DefaultPage";
import TaskList from "../containers/TaskList.jsx";
import TaskDetails from '../components/TaskDetails.jsx';
import MainHeader from '../components/MainHeader.jsx';

const IndexPage = () => {
    const [currentTask, setCurrentTask] = useState({});
    const {isAuthenticated, isLoading} = useAuthentication();
    const [searchParams, setSearchParams] = useSearchParams();
    const [defaultTask, setDefaultTask] = useState(searchParams.get("task") || "");

    const navigate = useNavigate();

    const taskClickHandler = async (uuid) => {
        await fetchFromApi("/api/tasks/" + uuid)
            .then(response => { return response.json(); })
            .then(data => {
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
                    datetimeCreated: data.datetime_created,
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

    if (defaultTask !== "") {
        taskClickHandler(defaultTask);
        setDefaultTask("");
    }

    return(
        <div className="flex flex-col max-h-screen h-screen bg-primary-background">
            <div className="flex-none"><MainHeader /></div>
            {/* not sure why i need overflow-y-hidden in main but it makes it so the other scroll bars work so */}
            <main className="
                flex flex-row flex-1
                max-w-7xl w-full m-auto h-full max-h-full overflow-y-hidden
            "> 
                <div className="
                    overflow-y-scroll
                    flex-none
                    w-[380px]
                    max-w-full
                    h-full
                    bg-primary-border
                ">
                    <TaskList
                        onTaskClick={(uuid) => taskClickHandler(uuid)}
                    />
                </div>
                <div className="
                    overflow-y-scroll
                    flex-1
                    w-full
                    h-full
                    block
                ">
                    <TaskDetails
                        uuid            = {currentTask.uuid            || ""}
                        summary         = {currentTask.summary         || ""}
                        author          = {currentTask.author          || ""}
                        category        = {currentTask.category        || ""}
                        project         = {currentTask.project         || ""}
                        type            = {currentTask.type            || ""}
                        status          = {currentTask.status          || ""}
                        description     = {currentTask.description     || ""}
                        comments        = {currentTask.comments        || ""}
                        datetimeCreated = {currentTask.datetimeCreated || ""}

                        onPostCommentClick = {
                            (content, uuid) =>
                                handlePostCommentForm(content, uuid)
                        }
                    />
                </div>
            </main>
        </div>
    )
};

export default IndexPage;