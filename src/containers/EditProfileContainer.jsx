import EditProfileForm from "../components/EditProfileForm";

import { fetchFromApi } from "../util/api";
import { setAccessToken, setUsername } from "../util/auth";
import { useNavigate } from "react-router-dom";

const EditProfileContainer = ({username}) => {
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
                    // NOTE: this has already happened

                    if ("username" in data) {
                        console.log(data.username);
                        if (data["username"][0].substring(0, 6) === "Ensure") {
                            throw new Error("Username must be between 3 and 24 characters.")
                        }
                        else if (data["username"][0].includes("alphanumerical")) {
                            throw new Error("Usernames must only have alphanumerical " +
                                "characters, underscores, and dashes. They also cannot have spaces.")
                        }
                        else throw new Error("Username " + username + " has already been taken.");
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
        <main className="w-full max-w-lg m-auto mt-2">
            <EditProfileForm
                onRegisterHandler={(username, password) => onSubmitHandler(username, password)}
            />
        </main>
    )
};

export default EditProfileContainer;