import { useState, useEffect } from 'react';
import { fetchFromApi } from '../util/api';

export const useProfiles = (username) => {
    const [profile, setProfile] = useState({username: "rovidecena"});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async() => {
            await fetchFromApi("/api/user" + username + "/profile/")
                .then(response => { return response.json(); })
                .then(data => { setProfile(data); })
                .finally(() => { setIsLoading(false); });
        };
        fetchProfile();
        return;
    }, [username])

    return {isLoading, profile};
}