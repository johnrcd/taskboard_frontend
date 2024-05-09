import LoginForm from "../components/LoginForm";
import { useState, useEffect } from 'react';
import { fetchFromApi } from "../util/api";

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
                // check for errors
                setFormErrors([]);

                if ("detail"   in data) { setFormErrors(formErrors => [data.detail, ...formErrors])} 
                if ("username" in data) { setFormErrors(formErrors => ["Username is empty.", ...formErrors]); }
                if ("password" in data) { setFormErrors(formErrors => ["Password is empty.", ...formErrors]); }

                console.log(formErrors);
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