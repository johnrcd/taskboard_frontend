import { useState, useEffect } from 'react';
import { fetchFromApi } from '../util/api';

export const useProfiles = async(username) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async() => {
            await fetchFromApi("/api/user/profile/" + username + "")
                .then(response => { return response.json(); })
                .then(data => { setProfile(data); })
        };
        fetchProfile();
        return;
    }, [username])

    return {profile};
}