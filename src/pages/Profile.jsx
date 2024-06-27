import DefaultPage from "./templates/DefaultPage";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const profileUsername = searchParams.get("username");

    // TODO: a lot of stuff

    // if username search param exists, load that user's profile
    // if username search param doesn't exist,
    //     if logged in: look at own profile
    //     if not logged in: uhh redirect to home page? or show error idk

    return (
        <DefaultPage>
            <main className="max-w-xl m-auto mt-6">
            </main>
        </DefaultPage>
    );
};

export default Profile;