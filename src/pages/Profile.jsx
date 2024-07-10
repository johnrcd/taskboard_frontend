import DefaultPage from "./templates/DefaultPage";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuthentication } from "../hooks/useAuthentication";

import { getUsername } from "../util/auth";

import Identicon from "../components/Identicon";
import { useNotifications } from "../hooks/useNotifications";

const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {isAuthenticated, isLoading} = useAuthentication();
    const profileUsername = searchParams.get("username");
    const navigate = useNavigate();

    const notifications = useNotifications(profileUsername);

    useEffect(() => {
        // if username search param exists, load that user's profile
        // if username search param doesn't exist,
        //     if logged in: look at own profile
        //     if not logged in: uhh redirect to home page? or show error idk

        if (!isLoading) {
            if (isAuthenticated) {
                // search
            }
            else {
                navigate("/");
            }
        }
    }, []);

    return (
        <DefaultPage>
            <main className="flex flex-row gap-4">
                <section className="flex-none max-w-[300px] w-full mt-4">
                    <div className="border-2 border-primary-text rounded-2xl w-full max-w-full">
                        <Identicon username={profileUsername} width="700" height="700"/>
                    </div>
                    <h1 className="text-2xl font-bold text-primary-text border-b-2 border-note-border w-full">Rovi Decena</h1>
                    <h2 className="text-xl text-primary-tooltip pb-2">@rovidecena</h2>
                    <h3 className="text-md text-primary-tooltip">Taskboard Creator!</h3>
                    <h2 className="                      
                        text-primary-text text-lg font-bold tracking-tight
                        mb-1 mt-5
                        border-b-2 border-note-border w-full
                    ">
                        about
                    </h2>
                    <p className="text-primary-tooltip text-normal tracking-tight
                        max-w-xl whitespace-pre-wrap">
                        Hey, I'm Rovi! I'm the developer for the Taskboard!
                    </p>
                </section>
                <section className="whitespace-pre w-full mt-4 break-words">
                    {JSON.stringify(notifications)}
                </section>
            </main>
        </DefaultPage>
    );
};

export default Profile;