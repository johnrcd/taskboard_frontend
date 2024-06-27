import DefaultPage from "./templates/DefaultPage";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuthentication } from "../hooks/useAuthentication";

import { getUsername } from "../util/auth";

const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {isAuthenticated, isLoading} = useAuthentication();
    const profileUsername = searchParams.get("username");
    const navigate = useNavigate();

    let profileToQuery = profileUsername;

    useEffect(() => {
        // if username search param exists, load that user's profile
        // if username search param doesn't exist,
        //     if logged in: look at own profile
        //     if not logged in: uhh redirect to home page? or show error idk

        if (profileUsername == null ||
            profileUsername == "" || 
            profileUsername == undefined) {
            
            // yes i LOVE nested if statements
            // (massive lie)

            if (!isLoading) {
                if (isAuthenticated) {
                    profileToQuery = getUsername();
                }
                else {
                    navigate("/");
                }
            }
        }    
    }, []);

    return (
        <DefaultPage>
            <main className="max-w-xl m-auto mt-6">
            </main>
        </DefaultPage>
    );
};

export default Profile;