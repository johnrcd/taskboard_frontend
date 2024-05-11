import LoginForm from "../components/LoginForm";
import { useState } from 'react';
import { fetchFromApi } from "../util/api";
import { setAccessToken } from "../util/auth";

const LoginContainer = () => {
    const [formErrors, setFormErrors] = useState([]);

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
                    setAccessToken(data.access);
                    // no refresh for now lol
                    // yes, this means you'll have to login constantly
                }
                // something went wrong
                else {
                    setFormErrors([]);

                    // TODO: fix errors not displaying properly
                    if ("detail"   in data) { setFormErrors(formErrors => [data.detail, ...formErrors])} 
                    console.log(formErrors);
                }
            })
    };


    return (
        <>
            <LoginForm
                onLoginHandler={(username, password) => onSubmitHandler(username, password)}
                errors={formErrors}
            />
        </>
    )
};

export default LoginContainer;