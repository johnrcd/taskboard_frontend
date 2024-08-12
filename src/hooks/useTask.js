import { useState, useEffect } from 'react';
import { fetchFromApi } from '../util/api';

export const useTask = (uuid) => {
    const [task, setTask] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchActivity = async() => {
            await fetchFromApi("/api/tasks/" + uuid + "/")
                .then(response => { return response.json(); })
                .then(data => { setTask(data); })
                .finally(() => { setIsLoading(false); });
        };
        fetchActivity();
        return;
    }, [uuid])

    return {isLoading, task};
}