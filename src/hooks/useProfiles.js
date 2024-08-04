import { useState } from 'react';
import { fetchFromApi } from '../util/api';

export const useProfiles = async () => {
    const [profile, setProfile] = useState({});

    const loadProfile = async (username) => {
        const response = await fetchFromApi("/api/user/profile/" + username + "");
        setProfile(response.data);
    };

    return {profile, loadProfile,};
}