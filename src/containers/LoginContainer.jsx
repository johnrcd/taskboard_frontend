import LoginForm from "../components/LoginForm";
import { useState } from 'react';
import { fetchFromApi } from "../util/api";
import { setAccessToken } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

const LoginContainer = () => {
    const navigate = useNavigate();
    const [isLoginValid, setIsLoginValid] = useState(true);

    const onSubmitHandler = async (username, password) => {
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
        await fetchFromApi("/api/token/", options) // need trailing slash for api
            .then(response => { return response.json(); })
            .then(data => {
                if ("access" in data && "refresh" in data) {
                    console.log("valid token");
                    setAccessToken(data.access);
                    navigate("/");
                }
                // something went wrong
                else {
                    setIsLoginValid(false);
                }
            })
    };


    return (
        <>
            <LoginForm
                onLoginHandler={(username, password) => onSubmitHandler(username, password)}
                showError={!isLoginValid}
            />
        </>
    )
};

export default LoginContainer;