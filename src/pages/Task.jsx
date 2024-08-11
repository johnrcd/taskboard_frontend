import DefaultPage from "./templates/DefaultPage";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchFromApi } from "../util/api";

import TaskDetails from "../components/TaskDetails";

const Task = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentTask, setCurrentTask] = useState({});

    useEffect(() => {
        const fetchTask = async(uuid) => {
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
        fetchTask(searchParams.get("uuid"));
    }, []);

    return (
        <DefaultPage>
            <div className="w-full max-w-2xl m-auto mt-2">
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
        </DefaultPage>
    );
};

export default Task;