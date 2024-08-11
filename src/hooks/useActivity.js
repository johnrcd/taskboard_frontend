import { useState, useEffect } from 'react';
import { fetchFromApi } from '../util/api';

export const useActivity = (username) => {
    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchActivity = async() => {
            await fetchFromApi("/api/user/" + username + "/activity/")
                .then(response => { return response.json(); })
                .then(data => { setActivity(data); })
                .finally(() => { setIsLoading(false); });
        };
        fetchActivity();
        return;
    }, [username])

    return {isLoading, activity};
}