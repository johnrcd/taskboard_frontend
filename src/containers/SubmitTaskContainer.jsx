import LoginForm from "../components/LoginForm";
import { useState } from 'react';
import { fetchFromApi, fetchAsUser } from "../util/api";
import { setAccessToken } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import SubmitTaskForm from "../components/SubmitTaskForm";

const SubmitTaskContainer = () => {
    const navigate = useNavigate();

    const onSubmitTaskHandler = async(
        summary, description, project, type
    ) => {
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "summary": summary,
                "description": description,
                "project": project,
                "type": type,
            })
        };

        await fetchAsUser("/api/tasks/", options)
            .then(response => {
                if(response.ok) {
                    navigate("/");
                }

                // TODO: error handling
            });
    };

    return(
        <>
            <SubmitTaskForm
                onSubmitTaskHandler={onSubmitTaskHandler}
            />
        </>
    )
};

export default SubmitTaskContainer;