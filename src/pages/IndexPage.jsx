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
                    authorName: data.author_name,
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

    const taskClickHandlerMobile = (uuid) => {
        navigate("/task/?uuid=" + uuid);
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
                flex md:flex-row flex-col flex-1 gap-3 md:gap-0
                max-w-7xl md:w-full m-auto h-full max-h-full md:overflow-y-hidden
            "> 
                <div className="
                    overflow-y-scroll
                    flex-none
                    md:w-[380px]
                    w-screen
                    max-w-full
                    h-full
                    bg-primary-border
                ">
                    {/* top 10 worst code designs ever */}
                    {/* number 6: whatever this is */}
                    <div className="hidden md:block">
                        <TaskList
                            onTaskClick={(uuid) => taskClickHandler(uuid)}
                        />
                    </div>
                    <div className="md:hidden block">
                        <TaskList
                            onTaskClick={(uuid) => taskClickHandlerMobile(uuid)}
                        />
                    </div>
                </div>
                <div className="
                    md:show
                    md:overflow-y-scroll
                    flex-1
                    w-full
                    h-full
                    hidden
                    md:block
                ">
                    <TaskDetails
                        uuid            = {currentTask.uuid            || ""}
                        summary         = {currentTask.summary         || ""}
                        author          = {currentTask.author          || ""}
                        authorName      = {currentTask.authorName      || ""}
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
