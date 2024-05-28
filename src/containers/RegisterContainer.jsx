import RegisterForm from '../components/RegisterForm';
import { useState } from 'react';
import { fetchFromApi } from "../util/api";
import { setAccessToken, setUsername } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

const RegisterContainer = () => {
    const navigate = useNavigate();

    const onSubmitHandler = async (username, password) => {
        // should probably turn this into a hook 
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
            })
        };

        let responseOk;

        await fetchFromApi("/api/register/", options)
            .then(async(response) => {
                responseOk = response.ok;
                return response.json()
            })
            .then(data => {
                console.log(JSON.stringify(data, null, 2));
                if (!responseOk) {
                    // diasterclass error handling
                    // inb4 a new error type is introduced and i forget to handle it
                    if ("username" in data) {
                        throw new Error("Username " + username + " has already been taken.");
                    }
                    else {
                        // terrible solution
                        throw new Error("Something went wrong when attempting to register...");
                    }
                }

                loginUser(username, password);
            })
            .catch(error => alert(error))
    };

    const loginUser = async (username, password) => {
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
            })
        };
        
        await fetchFromApi("/api/token/", options)
            .then(response => { return response.json(); })
            .then(data => {
                setAccessToken(data.access);
                setUsername(data.username);
                navigate("/");   
            })
    }

    return (
        <>
            <RegisterForm
                onRegisterHandler={(username, password) => onSubmitHandler(username, password)}
            />
        </>
    )
};

export default RegisterContainer;