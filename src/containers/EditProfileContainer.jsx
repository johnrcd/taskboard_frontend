import EditProfileForm from "../components/EditProfileForm";

import { fetchFromApi, fetchAsUser } from "../util/api";
import { setAccessToken, setUsername } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { getUsername } from "../util/auth";

const EditProfileContainer = () => {
    const navigate = useNavigate();

    const onSubmitHandler = async (data) => {
        const options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data)
        };
        await fetchAsUser("/api/profiles/" + getUsername() + "/", options)
            .then(() => {
                navigate("/profile/");
            });
    };
    return (
        <main className="w-full max-w-lg m-auto mt-2">
            <EditProfileForm
                username={getUsername()}
                onSubmitHandler={onSubmitHandler}
            />
        </main>
    )
};

export default EditProfileContainer;