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
                "/api/user/status/",
                options  
            )
                .then(response => { setIsAuthenticated(response.ok); })
                .finally(() => { setIsLoading(false); });
        };
        fetchLoginStatus();
        return;
    }, []);

    return { isAuthenticated, isLoading };
};