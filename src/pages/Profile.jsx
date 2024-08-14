import DefaultPage from "./templates/DefaultPage";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuthentication } from "../hooks/useAuthentication";

import { getUsername } from "../util/auth";

import Identicon from "../components/Identicon";
import UserActivity from "../components/UserActivity";
import { useNotifications } from "../hooks/useNotifications";
import NotificationList from "../containers/NotificationList";
import { useProfiles } from "../hooks/useProfiles";
import { useActivity } from "../hooks/useActivity";

const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {isAuthenticated, isLoading} = useAuthentication();
    const profileUsername = searchParams.get("username") || getUsername();
    const isCurrentUser = getUsername() === profileUsername;
    const {isLoading: isProfileLoading, profile} = useProfiles(profileUsername);
    const {isLoading: isActivityLoading, activity: userActivity} = useActivity(profileUsername);
    const navigate = useNavigate();

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
        console.log(profile);
    }, []);

    return (
        <DefaultPage>
            <main className="flex flex-row gap-4">
                <section className="flex-none max-w-[300px] w-full mt-4">
                    <div className="border-2 border-primary-text rounded-2xl w-full max-w-full">
                        <Identicon username={profileUsername} width="700" height="700"/>
                    </div>
                    <h1 className="
                        text-2xl
                        font-bold
                        text-primary-te
                        t border-b-2 border-note-border
                        w-full
                    ">
                        {/* username used if no actual name has been configured */}
                        {!isProfileLoading && profile.name || profile.username}
                    </h1>
                    <h2 className="
                        text-xl
                        text-primary-tooltip
                        pb-2
                    ">
                        @{!isProfileLoading && profile.username}
                    </h2>
                    <h3 className="
                        text-md
                        text-primary-tooltip
                    ">
                        {!isProfileLoading && profile.title || "No title provided."}
                    </h3>
                    <h2 className="                      
                        text-primary-text text-lg font-bold tracking-tight
                        mb-1 mt-5
                        border-b-2 border-note-border w-full
                    ">
                        about
                    </h2>
                    <p className="
                        text-primary-tooltip
                        text-normal
                        tracking-tight
                        max-w-xl
                    whitespace-pre-wrap">
                        {!isProfileLoading && profile.about_me || "No description provided."}
                    </p>
                    {!isProfileLoading && isCurrentUser &&
                    <button
                        className="button-optional mt-2"
                        type="button"
                        onClick={() => { navigate("/profile/edit/"); }}
                    >
                        Edit Profile
                    </button>
                    }
                    
                </section>
                {/* only display notifications if current user matches profile page */}
                {/* {isCurrentUser &&
                <section className="whitespace-pre w-full mt-4 break-words">
                    <NotificationList username={profileUsername} />
                </section>
                } */}
                <section className="w-full">
                    <h2 className="                      
                        text-primary-text text-lg font-bold tracking-tight
                        mb-1 mt-2
                        border-b-2 border-note-border w-full
                    ">
                        latest activity
                    </h2>
                    <section className="
                        flex flex-col gap-1 w-full
                    ">
                        {
                        !isActivityLoading &&            
                        userActivity.map((activity, index) =>
                            <UserActivity
                                user={activity.user}
                                datetimeCreated={activity.datetime_created}
                                type={activity.type}
                                task={activity.task}
                                key={"task_" + activity.task + "_" + index}
                            />
                        )
                        }
                    </section>
                </section>
                {/* <section className="whitespace-pre w-full mt-4 break-words font-mono">
                    {JSON.stringify(userActivity, null, 4)}
                </section> */}
            </main>
        </DefaultPage>
    );
};

export default Profile;