import { useState, useEffect } from 'react';
import { fetchAsUser } from "../util/api";
import { getAccessToken } from '../util/auth';

/**
 * Returns true or false is the user is logged in.
 * 
 * Login status is determined using the current access token.
 */
export const useAuthentication = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": ("Bearer " + getAccessToken()),
        },
    }

    useEffect(() => {
        const fetchLoginStatus = async () => {
            await fetchAsUser(
                "/api/token/status/",
                options  
            )
                .then(response => { setIsAuthenticated(response.ok); })
                .catch(() => { setIsAuthenticated(false); })
                .finally(() => { setIsLoading(false); });
        };
        fetchLoginStatus();

        // TODO: refresh tokens
        // NOTE: see possible plan below

        // 1: Test current auth token.
        // If successful, return true.
        // If it failed, continue below.

        // 2: Test current refresh token.
        // If successful replace current refresh and auth token

        //     2.1 test current auth token
        //     If it failed, uh... return false. Not sure why that would happen.
        //     If successful, return true.

        // 3: Test auth token again.
        // If successful, return true.
        // If it failed. Give up.

        return;
    }, []);

    return { isAuthenticated, isLoading };
};