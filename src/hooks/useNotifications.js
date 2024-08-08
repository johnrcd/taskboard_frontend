import { useState, useEffect } from 'react';
import { fetchAsUser, fetchFromApi } from "../util/api";

/**
 * Returns a list of notifications.
 */
export const useNotifications = (username) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async() => {
            await fetchFromApi("/api/user/" + username + "/notifications/")
                .then(response => { return response.json(); })
                .then(data => { setNotifications(data); })
        };
        fetchNotifications();
        return;
    }, [])

    return notifications;
};